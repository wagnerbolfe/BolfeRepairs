using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Equipment
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        public string Description { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Series { get; set; }
        public string Observation { get; set; }
        public string PictureUrl { get; set; }

        public int ClientId { get; set; }

    }
}