using System.ComponentModel.DataAnnotations;

namespace Api.Data;

public class Class
{
    public int Id { get; set; }
    public int LessonCount { get; set; }
    public int OnLesson { get; set; }

    [MaxLength(15)] 
    public string Title { get; set; } = null!;
    
    // Foreign key to Course
    public Course Course { get; set; } = null!;
    public int CourseId { get; set; }
    
    // Navigation property for related exams
    public ICollection<Exam> Exams { get; set; } = new List<Exam>();
    
    // Navigation property for related attendances
    public ICollection<Attendance> Attendances { get; set; } = new List<Attendance>();
}