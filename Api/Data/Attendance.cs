namespace Api.Data;

public class Attendance
{
    public int Id { get; set; }
    public int LessonNumber { get; set; }
    
    // Foreign key to User
    public User User { get; set; } = null!;
    public int UserId { get; set; }
    
    // Foreign key to Class
    public Class Class { get; set; } = null!;
    public int ClassId { get; set; }
}