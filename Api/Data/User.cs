using Microsoft.AspNetCore.Identity;

namespace Api.Data;

public class User : IdentityUser<int>
{
    // Navigation property for subscribed courses
    public ICollection<Curriculum> CurriculumsSubscribed { get; set; } = new List<Curriculum>();
    
    // Navigation property for related curriculums
    public ICollection<Curriculum> Curriculums { get; set; } = new List<Curriculum>();
}
