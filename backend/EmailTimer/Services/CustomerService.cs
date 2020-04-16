using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SignInResult = Microsoft.AspNetCore.Mvc.SignInResult;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

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
            Customer emailAlreadyExists = await _context.Customers.FirstOrDefaultAsync(a => a.Email == email, cancellationToken);
            if (emailAlreadyExists != null) return null;
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
        
        public async Task<string> Login(string email, string password, CancellationToken cancellationToken)
        {
            var user = await _context.Customers.FirstOrDefaultAsync(a => a.Email == email, cancellationToken: cancellationToken);
            var regeneratedHash = CreateHash(password);
            if (user.PasswordHash != regeneratedHash)
            {
                return null;
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(AppSettings.GetValue<string>("Salt"));
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, email), 
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
    
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);


            return user.Token;
        }

        public async Task<string> FindTokenForCurrentUser(string currentUser, CancellationToken cancellationToken)
        {
            var customer =  await _context.Customers.FirstOrDefaultAsync(a => a.Email == currentUser, cancellationToken);
            return customer.Token;
        }
    }
}