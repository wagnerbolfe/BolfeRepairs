using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Order> Orders { get; set; }
        public DbSet<Equipment> Equipments { get; set; }
        public DbSet<Client> Clients { get; set; }

    }

}