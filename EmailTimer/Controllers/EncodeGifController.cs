using System;
using System.IO;
using System.Threading.Tasks;
using EmailTimer1.Services;
using Microsoft.AspNetCore.Mvc;

namespace EmailTimer1.Controllers
{
    [ApiController]
    public class EncodeGifController : ControllerBase
    {
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(String id)
        {
            var image = await EncodeGifService.Create();
            var name = ManageGifService.GenerateIdentifier();
            return File(image, "image/gif");
        }
    }
}