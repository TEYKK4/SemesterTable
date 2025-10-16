namespace Api.DTO.Get;

public sealed class GetExamDto
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public DateOnly? ExamDate { get; set; }
    public int LessonNumber { get; set; }
}