using System.ComponentModel.DataAnnotations;

namespace Api.Data;

public class Curriculum
{
    public int Id { get; set; }
    
    [MaxLength(31)]
    public string Title { get; set; } = null!;
    
    // Foreign key to User
    public User User { get; set; } = null!;
    public int UserId { get; set; }

    // Navigation property for related classes
    public ICollection<Course> Courses { get; set; } = new List<Course>();
    
    // Navigation property for subscribed users
    public ICollection<User> SubscribedUsers { get; set; } = new List<User>();
}