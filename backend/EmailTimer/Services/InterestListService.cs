using System;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Models;
using Microsoft.EntityFrameworkCore;

namespace EmailTimer.Services
{
    public class InterestListService
    {
        private readonly EmailTimerContext _context;

        public InterestListService(EmailTimerContext context)
        {
            _context = context;
        }
        public async Task AddEmailToInterestList(string email, CancellationToken cancellationToken)
        {
            var emailAlreadyExists =
                await _context.InterestLists.FirstOrDefaultAsync(a => a.Email == email, cancellationToken);
            if (emailAlreadyExists != null) return;
            var lead = new InterestList{Email = email, AddedAt = DateTime.Now};
            await _context.InterestLists.AddAsync(lead, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);
        }
    }
}