using System;
using System.Threading.Tasks;

namespace EmailTimer1.Services
{
    public class ManageGifService
    {
        public static async Task<String> GenerateIdentifier()
        {
            return Convert.ToBase64String(Guid.NewGuid().ToByteArray());
        }
    }
}