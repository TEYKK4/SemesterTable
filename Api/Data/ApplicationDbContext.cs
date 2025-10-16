using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Api.Data;

public class ApplicationDbContext(DbContextOptions options) : IdentityDbContext<User, IdentityRole<int>, int>(options)
{
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<User>()
            .HasMany(u => u.CurriculumsSubscribed)
            .WithMany(c => c.SubscribedUsers);

        builder.Entity<Curriculum>()
            .HasOne(c => c.User)
            .WithMany(u => u.Curriculums);
    }

    public DbSet<Curriculum> Curriculums { get; set; }
    public DbSet<Course> Courses { get; set; }
    public DbSet<Class> Classes { get; set; }
    public DbSet<Exam> Exams { get; set; }
    public DbSet<Attendance> Attendances { get; set; }
}