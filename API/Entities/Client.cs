using System;

namespace API.Entities
{
    public class Client
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }
        public string Street { get; set; }
        public int? Number { get; set; }
        public string Neighborhood { get; set; }
        public string City { get; set; }
        public string Uf { get; set; }
        public string Phone { get; set; }
        public string Mobile { get; set; }
        public string Details { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Situation { get; set; }
    }
}