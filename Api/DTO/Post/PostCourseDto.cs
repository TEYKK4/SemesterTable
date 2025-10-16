namespace Api.DTO.Post;

public sealed class PostCourseDto
{
    public string Title { get; set; } = null!;

    public List<PostClassDto> Classes { get; set; } = null!;
}