namespace Api.DTO.Get;

public sealed class GetCourseDto
{
    public int Id { get; set; }
    public string Title { get; set; } = null!;

    public List<GetClassDto> Classes { get; set; } = null!;
}