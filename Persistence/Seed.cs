using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any() && !context.Clients.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{ DisplayName = "Wagner", UserName = "wagner" }
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }

                var clients = new List<Client>
                {
                    new Client
                    {
                        Id = 600,
                        FullName = "Wagner Bolfe",
                        Contact = "Wagner",
                        Street = "Rua Santos Lemos, 179",
                        City = "Caxias do Sul",
                        Neighborhood = "Kayser",
                        Uf = "RS",
                        Phone = "5432264641",
                        Mobile = "54981223173",
                        Details = "Perto da Igreja",
                        CreatedAt = DateTime.UtcNow,
                        Situation = true
                    },
                    new Client
                    {
                        Id = 601,
                        FullName = "Joe Doe",
                        Contact = "Wagner",
                        Street = "Rua Lorem Ipsun, 1239",
                        City = "Caxias do Sul",
                        Neighborhood = "Rio Branco",
                        Uf = "RS",
                        Phone = "5432276617",
                        Mobile = "54981223173",
                        Details = "Perto do Mercado",
                        CreatedAt = DateTime.UtcNow,
                        Situation = true
                    },
                    new Client
                    {
                        Id = 602,
                        FullName = "Lucas Nunes",
                        Contact = "Wagner",
                        Street = "Rua Pedro Lemos, 179",
                        City = "Caxias do Sul",
                        Neighborhood = "Cinquentenário",
                        Uf = "RS",
                        Phone = "5432124442",
                        Mobile = "54981223173",
                        Details = "Perto do Parque",
                        CreatedAt = DateTime.UtcNow,
                        Situation = true
                    }

                };

                await context.Clients.AddRangeAsync(clients);
                await context.SaveChangesAsync();
            }
        }
    };
}


