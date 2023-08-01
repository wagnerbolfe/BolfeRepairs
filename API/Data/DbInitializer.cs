using System;
using System.Collections.Generic;
using System.Linq;
using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(DataContext context)
        {
            if (context.Orders.Any()) return;

            var orders = new List<Order>
            {
                new Order
                {
                    FinishedAt = DateTime.UtcNow,
                    Equipment= "BRASTEMP BWL 09A",
                    Brand = "BRASTEMP",
                    Model = "BWL 09A",
                    Problem = "REFORMA GERAL. ROLAMENTOS, RETENTOR, VEDADORES, TUBO, EIXO E CONSERTO DA TAMPA. NOVA CHAMADA, NAO DRENAVA, TROQUEI A BOMBA, OK EM 03/11/15.",
                    ObsService = "",
                    ObsEquipment = ""
                },
                new Order
                {
                    FinishedAt = DateTime.UtcNow,
                    Equipment= "BRASTEMP BWL 09A",
                    Brand = "BRASTEMP",
                    Model = "BWL 09A",
                    Problem = "REFORMA GERAL. ROLAMENTOS, RETENTOR, VEDADORES, TUBO, EIXO E CONSERTO DA TAMPA. NOVA CHAMADA, NAO DRENAVA, TROQUEI A BOMBA, OK EM 03/11/15.",
                    ObsService = "",
                    ObsEquipment = ""
                },
                new Order
                {
                    FinishedAt = DateTime.UtcNow,
                    Equipment= "BRASTEMP BWL 09A",
                    Brand = "BRASTEMP",
                    Model = "BWL 09A",
                    Problem = "REFORMA GERAL. ROLAMENTOS, RETENTOR, VEDADORES, TUBO, EIXO E CONSERTO DA TAMPA. NOVA CHAMADA, NAO DRENAVA, TROQUEI A BOMBA, OK EM 03/11/15.",
                    ObsService = "",
                    ObsEquipment = ""
                },
                new Order
                {
                    FinishedAt = DateTime.UtcNow,
                    Equipment= "BRASTEMP BWL 09A",
                    Brand = "BRASTEMP",
                    Model = "BWL 09A",
                    Problem = "REFORMA GERAL. ROLAMENTOS, RETENTOR, VEDADORES, TUBO, EIXO E CONSERTO DA TAMPA. NOVA CHAMADA, NAO DRENAVA, TROQUEI A BOMBA, OK EM 03/11/15.",
                    ObsService = "",
                    ObsEquipment = ""
                },
                new Order
                {
                    FinishedAt = DateTime.UtcNow,
                    Equipment= "BRASTEMP BWL 09A",
                    Brand = "BRASTEMP",
                    Model = "BWL 09A",
                    Problem = "REFORMA GERAL. ROLAMENTOS, RETENTOR, VEDADORES, TUBO, EIXO E CONSERTO DA TAMPA. NOVA CHAMADA, NAO DRENAVA, TROQUEI A BOMBA, OK EM 03/11/15.",
                    ObsService = "",
                    ObsEquipment = ""
                },

            };

            foreach (var order in orders)
            {
                context.Orders.Add(order);
            }

            context.SaveChanges();
        }
    }
}