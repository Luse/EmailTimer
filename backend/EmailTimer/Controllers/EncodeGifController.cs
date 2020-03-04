using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Services;
using Microsoft.AspNetCore.Mvc;

namespace EmailTimer.Controllers
{
    [ApiController]
    public class EncodeGifController : ControllerBase
    {
        private readonly ManageGifService _service;

        public EncodeGifController(ManageGifService service)
        {
            _service = service;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(String id, CancellationToken cancellationToken)
        {
            var targetTime = await _service.FindTimer(id, cancellationToken);
            if (targetTime == null)
            {
                return NotFound();
            }

            var image = await EncodeGifService.Create((DateTime) targetTime);
            return File(image, "image/gif");
        }

        [HttpPost("/new/{targetDate}")]
        public async Task<ActionResult> Post(string targetDate, CancellationToken cancellationToken)
        {
            if (targetDate == null) return BadRequest();
            var test = await _service.CreateNewTimer(targetDate, cancellationToken );
            if (test == null) return BadRequest();
            return Ok(test);
        } 
    }
}