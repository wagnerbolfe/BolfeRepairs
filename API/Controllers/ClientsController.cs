using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Clients;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [Authorize]
    public class ClientsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Client>>> GetClientsAsync()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClientAsync(int id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateClientAsync([FromBody] Client client)
        {
            return Ok(await Mediator.Send(new Create.Command { Client = client }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditClientAsync(int id, [FromBody] Client client)
        {
            client.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Client = client }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClientAsync(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}