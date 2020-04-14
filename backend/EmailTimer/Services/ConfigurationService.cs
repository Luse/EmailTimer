using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace EmailTimer.Services
{
    public class ConfigurationService
    {
        private readonly EmailTimerContext _context;

        public ConfigurationService(EmailTimerContext context)
        {
            _context = context;
        }
        public async Task<CampaignConfiguration> CreateConfiguration(long campaignId, CancellationToken cancellationToken)
        {
            var configuration = await _context.CampaignConfigurations.AddAsync(new CampaignConfiguration(), cancellationToken);
            _context.Campaigns.FirstOrDefault(a => a.Id == campaignId).Configuration = configuration.Entity;
            await _context.SaveChangesAsync(cancellationToken);
            return configuration.Entity;
        }

        public async Task<EntityEntry<CampaignConfiguration>> UpdateConfiguration(CampaignConfiguration configuration, CancellationToken cancellationToken)
        { 
            var updatedConfiguration = _context.CampaignConfigurations.Update(configuration);
            await _context.SaveChangesAsync(cancellationToken);
            return updatedConfiguration;
        }

        public async Task<bool> VerifyIdToCustomer(long configurationId, string userEmail)
        {
            var user = await _context.Customers.FirstOrDefaultAsync(a => a.Email == userEmail);
            var l = configurationId;
            var campaign = await _context.Campaigns.FirstOrDefaultAsync(a => a.Configuration.Id == l);
            return campaign.CustomerId == user.Id;
        }
    }
}