namespace Api.DTO.Get;

public sealed class GetClassDto
{
    public int Id { get; set; }
    public string Title { get; set; } = null!;
    public int LessonCount { get; set; }
    public int OnLesson { get; set; }
    
    public List<GetExamDto>? Exams { get; set; } = null!;
}