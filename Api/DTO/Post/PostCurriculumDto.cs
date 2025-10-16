namespace Api.DTO.Post;

public sealed class PostCurriculumDto
{
    public string Title { get; set; } = null!;

    public List<PostCourseDto> Courses { get; set; } = null!;
}
