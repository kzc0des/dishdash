using Microsoft.EntityFrameworkCore;
using DishDash.Domain.Entities;

namespace DishDash.Infrastructure.Persistence;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; } = null!;
    public DbSet<RefreshToken> RefreshTokens { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>(builder =>
        {
            builder.HasKey(u => u.Id);
            builder.Property(u => u.FirstName).IsRequired().HasMaxLength(50);
            builder.Property(u => u.LastName).IsRequired().HasMaxLength(50);
            builder.Property(u => u.Email).IsRequired().HasMaxLength(100);
            builder.HasIndex(u => u.Email).IsUnique();
            builder.Property(u => u.PasswordHash).IsRequired();
            builder.Property(u => u.PhoneNumber).HasMaxLength(20);

            builder.HasMany(u => u.RefreshTokens)
                   .WithOne(rt => rt.User)
                   .HasForeignKey(rt => rt.UserId)
                   .OnDelete(DeleteBehavior.Cascade);
        });

        modelBuilder.Entity<RefreshToken>(builder =>
        {
            builder.HasKey(rt => rt.Id);
            builder.Property(rt => rt.Token).IsRequired().HasMaxLength(200);
            builder.Property(rt => rt.Expires).IsRequired();
            builder.Property(rt => rt.Created).IsRequired();
            builder.Property(rt => rt.CreatedByIp).IsRequired().HasMaxLength(50);
            builder.Property(rt => rt.Revoked).IsRequired(false);
            builder.Property(rt => rt.RevokedByIp).HasMaxLength(50);
            builder.Property(rt => rt.ReplacedByToken).HasMaxLength(200);
            builder.Property(rt => rt.ReasonRevoked).HasMaxLength(200);

            builder.HasOne(rt => rt.User)
                   .WithMany(u => u.RefreshTokens)
                   .HasForeignKey(rt => rt.UserId);
        });
    }
}
