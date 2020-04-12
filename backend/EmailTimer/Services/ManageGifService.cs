using System;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Timer = EmailTimer.Models.Timer;

namespace EmailTimer.Services
{
    public class ManageGifService
    {
        private readonly EmailTimerContext _context;
        public ManageGifService(EmailTimerContext context)
        {
            _context = context;
        }
        private async Task<String> GenerateIdentifier( int length)
        {
            StringBuilder builder = new StringBuilder(); 
            Enumerable
                .Range(65, 26)
                .Select(e => ((char)e).ToString())
                .Concat(Enumerable.Range(97, 26).Select(e => ((char)e).ToString()))
                .Concat(Enumerable.Range(0, 10).Select(e => e.ToString()))
                .OrderBy(e => Guid.NewGuid())
                .Take(length)
                .ToList().ForEach(e => builder.Append(e));
            return (builder.ToString());
        }

        public async Task<Timer> FindTimer(String accessor, CancellationToken cancellationToken)
        {
            return await _context.Timers.FirstOrDefaultAsync(k => k.WebAccessor == accessor, cancellationToken);
        }

        public async Task<Timer[]> CreateNewTimer(String targetTime, string customerEmail, long campaignId, CancellationToken cancellationToken)
        {
            var accessor = await GenerateIdentifier(6);
            bool parseResult = DateTime.TryParse(targetTime, out _);
            if (!parseResult)
            {
                return null;
            }
            var user =  _context.Customers.FirstOrDefault(e => e.Email == customerEmail);
            if (user != null)
            {
                var userId = user.Id;
                var time = DateTime.Parse(targetTime);
                var timer = new Timer {CreatedAt = DateTime.Today, TargetDate = time, Note = "test", WebAccessor = accessor, CampaignId = campaignId };
                await _context.Timers.AddAsync(timer, cancellationToken);
                await _context.SaveChangesAsync(cancellationToken);
                return await ListAllGifsForCampaignAsync(customerEmail, campaignId,  cancellationToken);
            }
            return null;
        }
        public async Task<Timer[]> ListAllGifsForCampaignAsync(string email, long campaignId, CancellationToken cancellationToken)
        {
            var user =  _context.Customers.FirstOrDefault(e => e.Email == email);
            var userId = user.Id;
            var result = await _context.Timers
                .Where(e => e.CampaignId == campaignId)
                .ToArrayAsync(cancellationToken);
            return result;
        }
        public async Task<bool> DeleteTimer(long id, CancellationToken cancellationToken)
        {
            var timer = await _context.Timers.Where(a => a.Id == id).FirstOrDefaultAsync(cancellationToken);
            if (timer is null) return false;
            _context.Timers.Remove(timer);
            
            await _context.SaveChangesAsync(cancellationToken);
            return true;
        }

        public async Task<CampaignConfiguration> FindConfiguration(long id)
        {
            var campaign = await _context.Campaigns.Include(a => a.Configuration).FirstOrDefaultAsync(a => a.Id == id);
            return campaign.Configuration;
        }
    }
}