using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Order
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        public string EquipmentName { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Problem { get; set; }
        public string ObsService { get; set; }
        public string ObsEquipment { get; set; }
        public DateTime FinishedAt { get; set; }

        public int ClientId { get; set; }
        public int EquipmentId { get; set; }


    }
}