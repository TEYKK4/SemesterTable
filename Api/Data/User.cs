using Microsoft.AspNetCore.Identity;

namespace Api.Data;

public class User : IdentityUser<int>
{
    // Navigation property for subscribed courses
    public ICollection<Course> CoursesSubscribed { get; set; } = new List<Course>();
    
    // Navigation property for related courses
    public ICollection<Course> Courses { get; set; } = new List<Course>();
}