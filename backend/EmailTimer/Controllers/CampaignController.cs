using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EmailTimer.Controllers
{
    [Route("api/ca/campaigns")]
    [ApiController]
    public class CampaignController : ControllerBase
    {
        private readonly CampaignService _service;

        public CampaignController(CampaignService service)
        {
            _service = service;
        }
        [Authorize]
        [HttpPost("New/{campaignName}")]
        public async Task<ActionResult> Post(string campaignName, CancellationToken cancellationToken)
        {
            if (campaignName == null) return BadRequest();
            var userEmail = HttpContext.User.FindFirst(ClaimTypes.Email)?.Value;
            await _service.CreateNewCampaign(campaignName, userEmail, cancellationToken);
            var list = await _service.GetAllCampaignsForUser(userEmail, cancellationToken);
            return Ok(list);
        } 
        [Authorize]
        [HttpGet("All")]
        public async Task<ActionResult> GetAll( CancellationToken cancellationToken)
        { 
            var userEmail = HttpContext.User.FindFirst(ClaimTypes.Email)?.Value;
            var list = await _service.GetAllCampaignsForUser(userEmail, cancellationToken);
            if (list is null)
            {
                return Ok(new List<string>());
            }
            
            return Ok(list);
        } 
        [Authorize]
        [HttpDelete("{campaignId}")]
        public async Task<ActionResult> Delete(long campaignId, CancellationToken cancellationToken)
        {
            await _service.DeleteCampaign(campaignId, cancellationToken);
            return Ok();
        } 
        [Authorize]
        [HttpGet("{campaignId}")]
        public async Task<ActionResult> Post(long campaignId, CancellationToken cancellationToken)
        {
            await _service.GetCampaign(campaignId, cancellationToken);
            return Ok();
        } 
        [AllowAnonymous]
        [HttpGet("{campaignId}/Preview/{completeBool}")]
        public async Task<ActionResult> Preview(long campaignId, bool completeBool, CancellationToken cancellationToken)
        {
            var campaign = await _service.GetCampaign(campaignId, cancellationToken);
            var today = DateTime.Now;
            DateTime targetDate = today;
            if (!completeBool)
            {
                targetDate = today.AddDays(99);
            }
            
            var previewImage = await EncodeGifService.Create(targetDate, campaign.Configuration);
            return File(previewImage, "image/gif");
        } 
    }
}