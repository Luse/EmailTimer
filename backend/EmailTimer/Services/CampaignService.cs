using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Models;
using Microsoft.EntityFrameworkCore;

namespace EmailTimer.Services
{
    public class CampaignService
    {
        private readonly EmailTimerContext _context;
        
        public CampaignService(EmailTimerContext context)
        {
            _context = context;
        }

        public async Task<object> CreateNewCampaign(string campaignName, string customerEmail, CancellationToken cancellationToken)
        {
            var user =  await _context.Customers.FirstOrDefaultAsync(e => e.Email == customerEmail, cancellationToken);
            await _context.Campaigns.AddAsync(new Campaign{Name = campaignName, CustomerId = user.Id, CreatedAt = DateTime.Now, Configuration = new CampaignConfiguration()}, cancellationToken);
            return await _context.SaveChangesAsync(cancellationToken);
        }


        public async Task GetCampaign(long campaignId, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public async Task DeleteCampaign(long campaignId, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public async Task<object> GetAllCampaignsForUser(string customerEmail, CancellationToken cancellationToken)
        {
            var user =  await _context.Customers.FirstOrDefaultAsync(e => e.Email == customerEmail, cancellationToken);
            return await _context.Campaigns.Where(x => x.CustomerId == user.Id).Include(a => a.Configuration).ToArrayAsync(cancellationToken);
        }
    }
}