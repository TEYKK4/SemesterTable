using System.ComponentModel.DataAnnotations;

namespace Api.Data;

public class Course
{
    public int Id { get; set; }
    
    [MaxLength(31)]
    public string Title { get; set; } = null!;
    
    // Foreign key to Curriculum
    public int CurriculumId { get; set; }
    public Curriculum Curriculum { get; set; } = null!;
    
    // Navigation property for related classes
    public ICollection<Class> Classes { get; set; } = new List<Class>();
}

