using System;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Models;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace EmailTimer.Services
{
    public class CustomerService
    {
        private readonly EmailTimerContext _context;

        public CustomerService(EmailTimerContext context)
        {
            _context = context;
        }
        public async Task<string> RegisterNewUser(string email, string password, CancellationToken cancellationToken)
        {
            var hash = CreateHash(password);
            var user = new Customer {Email = email, PasswordHash = hash, CreatedAt = DateTime.Now};
            await _context.Customers.AddAsync(user, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);
            return hash;
        }
        
        private static string CreateHash(string password)
        {
            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }
            var hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));
            return hashed;
        }

    }
}