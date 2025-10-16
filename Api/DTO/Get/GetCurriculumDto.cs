using Api.DTO.Post;

namespace Api.DTO.Get;

public sealed class GetCurriculumDto
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public List<GetCourseDto> Courses { get; set; } = null!;
}