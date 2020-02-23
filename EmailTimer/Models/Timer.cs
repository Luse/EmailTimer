using System;

namespace EmailTimer1.Models
{
    public class Timer
    {
        public long Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime TargetDate { get; set; }
        public string Note { get; set; }
    }
}