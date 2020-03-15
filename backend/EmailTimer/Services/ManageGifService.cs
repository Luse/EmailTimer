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

        public async Task<DateTime?> FindTimer(String accessor, CancellationToken cancellationToken)
        {
            var timer = _context.Timers.FirstOrDefault(k => k.WebAccessor == accessor);
            return timer?.TargetDate;
        }

        public async Task<ActionResult<String>> CreateNewTimer(String targetTime, string customerEmail, CancellationToken cancellationToken)
        {
            var accessor = await GenerateIdentifier(6);
            bool parseResult = DateTime.TryParse(targetTime, out DateTime result);
            if (!parseResult)
            {
                return null;
            }
            var user =  _context.Customers.FirstOrDefault(e => e.Email == customerEmail);
            if (user != null)
            {
                var userId = user.Id;
                var time = DateTime.Parse(targetTime);
                var timer = new Timer {CreatedAt = DateTime.Today, TargetDate = time, Note = "test", WebAccessor = accessor, CustomerId = userId };
                await _context.Timers.AddAsync(timer, cancellationToken);
                await _context.SaveChangesAsync(cancellationToken);
                return accessor;
            }
            return null;
        }
        public async Task<Timer[]> ListAllGifsForUserAsync(string email, CancellationToken cancellationToken)
        {
            var user =  _context.Customers.FirstOrDefault(e => e.Email == email);
            var userId = user.Id;
            var result = await _context.Timers.Where(e => e.CustomerId == userId)
                .ToArrayAsync(cancellationToken);
            return result;

        }
    }
}