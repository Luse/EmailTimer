using System.IO;
using System.Threading.Tasks;
using emailtimer.Services;
using Microsoft.AspNetCore.Mvc;

namespace emailtimer.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class EncodeGifController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var image = await emailtimer.Services.EncodeGifService.Create();
            return File(image, "image/gif");
        }
    }
}