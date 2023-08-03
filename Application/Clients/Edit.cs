using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Clients
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Client Client { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var client = await _context.Clients.FindAsync(request.Client.Id);

                _mapper.Map(request.Client, client);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}