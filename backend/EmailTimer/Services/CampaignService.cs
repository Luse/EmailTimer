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

        public async Task<object> CreateNewCampaign(string campaignName, CancellationToken cancellationToken)
        {
            return await _context.Campaigns.AddAsync(new Campaign(), cancellationToken);
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
            return user.Campaigns;
        }
    }
}