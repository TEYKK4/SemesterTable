namespace Api.Data;

public class Exam
{
    public int Id { get; set; }
    public DateOnly? ExamDate { get; set; }
    public int LessonNumber { get; set; }
    
    // Foreign key to Course
    public Course Course { get; set; } = null!;
    public int CourseId { get; set; }
}