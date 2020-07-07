using Microsoft.EntityFrameworkCore;

namespace EmailTimer.Models
{
    public sealed class EmailTimerContext : DbContext
    {
        public EmailTimerContext(DbContextOptions<EmailTimerContext> options) : base(options){
            Database.Migrate();
        }
        public DbSet<Timer> Timers { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Campaign> Campaigns { get; set; }
        public DbSet<CampaignConfiguration> CampaignConfigurations { get; set; }
        public DbSet<InterestList> InterestLists { get; set; }
    }
}