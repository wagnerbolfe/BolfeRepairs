using Persistence;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class EquipmentController : BaseApiController
    {
        private readonly DataContext _context;
        public EquipmentController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Equipment>>> GetEquipments()
        {
            return await _context.Equipments.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Equipment>> GetEquipment(int id)
        {
            return await _context.Equipments.FindAsync(id);
        }
    }
}