using System;
using System.Collections.Generic;

namespace EmailTimer.Models
{
    public class Customer
    {
        public long Id { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? LastUpdatedAt { get; set; }
        public List<Campaign> Campaigns { get; set; }
        public string Token { get; set; }
    }
}