using Domain;
using MediatR;
using Persistence;

namespace Application.Clients
{
    public class Create
    {
        public class Command : IRequest
        {
            public Client Client { get; set; }
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
                _context.Clients.Add(request.Client);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}