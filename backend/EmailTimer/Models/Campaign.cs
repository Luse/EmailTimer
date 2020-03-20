using System;
using System.Collections.Generic;

namespace EmailTimer.Models
{
    public class Campaign
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? LastUpdatedAt { get; set; }
        public List<Timer> Timers { get; set; }
        public CampaignConfiguration Configuration { get; set; }
    }
}