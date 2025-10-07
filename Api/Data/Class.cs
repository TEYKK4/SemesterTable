namespace Api.Data;

public class Class
{
    public int Id { get; set; }
    public int Name { get; set; }
    public int LessonCount { get; set; }
    public int OnLesson { get; set; }
    
    // Foreign key to Course
    public Course Course { get; set; } = null!;
    public int CourseId { get; set; }
    
    // Navigation property for related exams
    public ICollection<Exam> Exam { get; set; } = new List<Exam>();
    
    // Navigation property for related attendances
    public ICollection<Attendance> Attendances { get; set; } = new List<Attendance>();
}