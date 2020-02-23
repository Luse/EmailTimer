using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EmailTimer1.Models
{

    public sealed class EmailTimerContext : DbContext
    {
        public EmailTimerContext(DbContextOptions<EmailTimerContext> options) : base(options){
            Database.Migrate();
        }
        public DbSet<Timer> Timers { get; set; }
    }
}