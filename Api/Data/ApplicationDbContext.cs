using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Api.Data;

public class ApplicationDbContext(DbContextOptions options) : IdentityDbContext<User, IdentityRole<int>, int>(options)
{
    DbSet<Course> Courses { get; set; }
    DbSet<Class> Classes { get; set; }
    DbSet<Exam> Exams { get; set; }
    DbSet<Attendance> Attendances { get; set; }
}