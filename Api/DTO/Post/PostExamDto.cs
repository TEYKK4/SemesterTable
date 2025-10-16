namespace Api.DTO.Post;

public sealed class PostExamDto
{
    public string Name { get; set; } = null!;
    public DateOnly? ExamDate { get; set; }
    public int LessonNumber { get; set; }
}