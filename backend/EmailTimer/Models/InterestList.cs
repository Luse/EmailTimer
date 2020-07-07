using System;

namespace EmailTimer.Models
{
    public class InterestList
    {
        public long Id { get; set; }
        public string Email { get; set; }
        public DateTime AddedAt { get; set; }
    }
}