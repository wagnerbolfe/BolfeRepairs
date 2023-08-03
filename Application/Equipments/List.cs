using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Equipments
{
    public class List
    {
        public class Query : IRequest<List<Equipment>> { }

        public class Handler : IRequestHandler<Query, List<Equipment>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Equipment>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Equipments.ToListAsync();
            }
        }
    }
}