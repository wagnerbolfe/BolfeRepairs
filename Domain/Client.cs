using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Client
    {
        // [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Street { get; set; }
        public string Neighborhood { get; set; }
        public string City { get; set; }
        public string Uf { get; set; }
        public string Phone { get; set; }
        public string Mobile { get; set; }
        public string Details { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool Situation { get; set; }
    }
}