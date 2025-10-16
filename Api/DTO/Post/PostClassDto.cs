namespace Api.DTO.Post;

public sealed class PostClassDto
{
    public string Title { get; set; } = null!;
    public int LessonCount { get; set; }
    public int OnLesson { get; set; }
    
    public List<PostExamDto>? Exams { get; set; } = null!;
}