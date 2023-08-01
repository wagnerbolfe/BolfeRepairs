namespace API.Entities
{
    public class Equipment
    {
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