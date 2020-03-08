using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace EmailTimer.Services
{
    public class CustomerService
    {
        private readonly EmailTimerContext _context;
        private IConfiguration AppSettings { get; set; }
        
        public CustomerService(EmailTimerContext context, IConfiguration configuration)
        {
            _context = context;
            AppSettings = configuration;
        }

        public async Task<string> RegisterNewUser(string email, string password, CancellationToken cancellationToken)
        {
            var hash = CreateHash(password);
            var user = new Customer {Email = email, PasswordHash = hash, CreatedAt = DateTime.Now};
            await _context.Customers.AddAsync(user, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);
            return hash;
        }
        
        private string CreateHash(string password)
        {
            var saltString = AppSettings.GetValue<string>("Salt");
            byte[] salt = Encoding.ASCII.GetBytes(saltString);
            var hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));
            return hashed;
        }
        
        public async Task<ActionResult> Login(string email, string password, CancellationToken cancellationToken)
        {
            var user = await _context.Customers.FirstOrDefaultAsync(a => a.Email == email, cancellationToken: cancellationToken);
            if (user.PasswordHash != CreateHash(password))
            {
                return new ForbidResult();
            }
            
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, email),
                new Claim(ClaimTypes.Role, "customer")
            };
            var claimsIdentity = new ClaimsIdentity(
                claims, CookieAuthenticationDefaults.AuthenticationScheme);
            return new SignInResult(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity));
        }

    }
}