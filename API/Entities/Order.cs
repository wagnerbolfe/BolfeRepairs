using System;

namespace API.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public string Equipment { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Problem { get; set; }
        public string ObsService { get; set; }
        public string ObsEquipment { get; set; }
        public DateTime FinishedAt { get; set; }
    }
}