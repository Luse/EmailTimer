using System;
using System.IO;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Models;
using EmailTimer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Timer = EmailTimer.Models.Timer;

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
        [AllowAnonymous]
        [HttpGet("{webAccessor}")]
        public async Task<ActionResult> Get(string webAccessor, CancellationToken cancellationToken)
        {
            var timer = await _service.FindTimer(webAccessor, cancellationToken);
            if (timer == null)
            {
                return NotFound();
            }

            var configuration = await _service.FindConfiguration(timer.CampaignId);
            var image = await EncodeGifService.Create(timer.TargetDate, configuration);
            return File(image, "image/gif");
        }
        [Authorize]
        [HttpPost("/api/g/{campaignId}/New/{targetDate}")]
        public async Task<ActionResult> Post(string targetDate, long campaignId, CancellationToken cancellationToken)
        {
            if (targetDate == null) return BadRequest();
            var userEmail = HttpContext.User.FindFirst(ClaimTypes.Email)?.Value;
            var timer = await _service.CreateNewTimer(targetDate, userEmail, campaignId, cancellationToken );
            if (timer == null) return BadRequest();
            return Ok(timer);
        } 
        [Authorize]
        [HttpGet("/api/g/List/{campaignId}")]
        public async Task<Timer[]> GetSingle(long campaignId, CancellationToken cancellationToken)
        {
            var listOfGifs = await _service.ListAllGifsForCampaignAsync(HttpContext.User.FindFirst(ClaimTypes.Email)?.Value, campaignId,
                cancellationToken);
            return listOfGifs;
        }
        [Authorize]
        [HttpDelete("/api/g/{campaignId}/Delete/{id}")]
        public async Task<ActionResult> Delete(long id, long campaignId, CancellationToken cancellationToken)
        {
            var result = await _service.DeleteTimer(id, cancellationToken);
            var listOfGifs = await _service.ListAllGifsForCampaignAsync(HttpContext.User.FindFirst(ClaimTypes.Email)?.Value, campaignId,
                cancellationToken);
            if(result) return Ok(listOfGifs);
            return BadRequest();
        }
    }
}