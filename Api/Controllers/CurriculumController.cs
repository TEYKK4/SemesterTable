using System.Security.Claims;
using Api.Data;
using Api.DTO.Get;
using Api.DTO.Post;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class CurriculumController(ApplicationDbContext context) : ControllerBase
{
    ApplicationDbContext _context = context;

    [Authorize]
    [HttpPost]
    public async Task<ActionResult<GetCurriculumDto>> Post([FromBody] PostCurriculumDto curriculumDto)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        if (userId is null) return Unauthorized();
        
        if (!int.TryParse(userId, out var parsedUserId)) return BadRequest("Invalid user ID");

        var curriculum = new Curriculum
        {
            Title = curriculumDto.Title,
            UserId = parsedUserId,
        };

        foreach (var crs in curriculumDto.Courses)
        {
            var course = new Course
            {
                Title = crs.Title,
            };

            foreach (var cls in crs.Classes)
            {
                var @class = new Class
                {
                    Title = cls.Title,
                    LessonCount = cls.LessonCount,
                    OnLesson = cls.OnLesson
                };

                if (cls.Exams is not null)
                {
                    foreach (var exm in cls.Exams)
                    {
                        var exam = new Exam
                        {
                            Name = exm.Name,
                            ExamDate = exm.ExamDate,
                            LessonNumber = exm.LessonNumber,
                        };
                    
                        @class.Exams.Add(exam);
                    }
                    
                }
                
                course.Classes.Add(@class);
            }

            curriculum.Courses.Add(course);
        }

        await _context.Curriculums.AddAsync(curriculum);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(Get), new { id = curriculum.Id }, new GetCurriculumDto
        {
            Title = curriculum.Title
        });
    }   

    [HttpGet("{id:int}")]
    public async Task<ActionResult<GetCurriculumDto>> Get(int id)
    {
        if (await _context.Curriculums.FirstOrDefaultAsync(x => x.Id == id) is { } curriculum)
        {
            return new GetCurriculumDto
            {
                Id = curriculum.Id,
                Title = curriculum.Title
            };
        }
        
        return NotFound();
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<GetCurriculumDto>>> Get()
    {
        var curriculums = new List<GetCurriculumDto>();
        
        foreach (var curriculum in await _context.Curriculums.Include(curriculum => curriculum.Courses)
                     .ThenInclude(course => course.Classes).ThenInclude(@class => @class.Exams).ToListAsync())
        {
            curriculums.Add(new GetCurriculumDto
            {
                Id = curriculum.Courses.Count,
                Title = curriculum.Title,
                Courses = curriculum.Courses.Select(course => new GetCourseDto
                {
                    Id = course.Id,
                    Title = course.Title,
                    Classes = course.Classes.Select(@class => new GetClassDto
                    {
                        Id = @class.Id,
                        Title = @class.Title,
                        LessonCount = @class.LessonCount,
                        OnLesson = @class.OnLesson,
                        Exams = @class.Exams.Select(exam => new GetExamDto
                        {
                            Id = exam.Id,
                            Name = exam.Name,
                            ExamDate = exam.ExamDate,
                            LessonNumber = exam.LessonNumber
                        }).ToList()
                    }).ToList()
                }).ToList()
            });
        }
        
        return curriculums;
    }
    
    
}