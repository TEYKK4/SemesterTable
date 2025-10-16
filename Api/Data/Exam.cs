using System.ComponentModel.DataAnnotations;

namespace Api.Data;

public class Exam
{
    public int Id { get; set; }
    [MaxLength(15)]
    public string Name { get; set; } = null!;
    public DateOnly? ExamDate { get; set; }
    public int LessonNumber { get; set; }
    
    // Foreign key to Class
    public Class Class { get; set; } = null!;
    public int ClassId { get; set; }
}