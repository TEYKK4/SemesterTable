namespace Api.Data;

public class Course
{
    public int Id { get; set; }
    
    public string Title { get; set; } = string.Empty;
    public DateOnly StartDate { get; set; }
    
    // Foreign key to User
    public User User { get; set; } = null!;
    public int UserId { get; set; }
    
    // Navigation property for subscribed users
    public ICollection<User> SubscribedUsers { get; set; } = new List<User>();
    
    // Navigation property for related classes
    public ICollection<Class> Classes { get; set; } = new List<Class>();
}