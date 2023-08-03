using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Clients
{
    public class Details
    {
        public class Query : IRequest<Client>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Client>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Client> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Clients.FindAsync(request.Id);
            }
        }
    }
}