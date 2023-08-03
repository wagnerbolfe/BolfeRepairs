using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Clients
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var client = await _context.Clients.FindAsync(request.Id);

                _context.Remove(client);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}