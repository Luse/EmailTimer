using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmailTimer.Models
{
    public class Timer
    {
        public long Id { get; set; }
        public long CustomerId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? LastUpdatedAt { get; set; }
        public DateTime TargetDate { get; set; }
        public string WebAccessor { get; set; }
        public string Note { get; set; }
    }
}