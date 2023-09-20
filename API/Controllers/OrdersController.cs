using Application.Orders;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class OrdersController : BaseApiController
    {
        private readonly DataContext _context;
        public OrdersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Order>>> GetOrders()
        {
            return await _context.Orders.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            return await _context.Orders.FindAsync(id);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrderAsync([FromBody] Order order)
        {
            return Ok(await Mediator.Send(new Create.Command { Order = order }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditOrderAsync(int id, [FromBody] Order order)
        {
            order.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Order = order }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderAsync(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}