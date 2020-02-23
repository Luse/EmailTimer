using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Models;
using Microsoft.AspNetCore.Mvc;
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
        private async Task<String> GenerateIdentifier()
        {
            return Convert.ToBase64String(Guid.NewGuid().ToByteArray());
        }

        public async Task<DateTime?> FindTimer(String accessor, CancellationToken cancellationToken)
        {
            var timer = _context.Timers.FirstOrDefault(k => k.WebAccessor == accessor);
            return timer?.TargetDate;
        }

        public async Task<ActionResult<String>> CreateNewTimer(String targetTime, CancellationToken cancellationToken)
        {
            var accessor = await GenerateIdentifier();
            var time = DateTime.Parse(targetTime);
            var timer = new Timer {CreatedAt = DateTime.Today, TargetDate = time, Note = "test", WebAccessor = accessor};
            await _context.Timers.AddAsync(timer, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);
            return accessor;
        }
    }
}