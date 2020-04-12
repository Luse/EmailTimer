using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Models;
using EmailTimer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace EmailTimer.Controllers
{
    [Route("api/cg/configurations")]
    [ApiController]
    public class ConfigurationController : ControllerBase
    {
        private readonly ConfigurationService _service;

        public ConfigurationController(ConfigurationService service)
        {
            _service = service;
        }
        
        [Authorize]
        [HttpPost("{configurationId}")]
        public async Task<ActionResult> Post(long configurationId, [FromBody] JObject body, CancellationToken cancellationToken)
        {
            if (configurationId == null) return BadRequest();
            var userEmail = HttpContext.User.FindFirst(ClaimTypes.Email)?.Value;
            var verifyPermissions = await _service.VerifyIdToCustomer(configurationId, userEmail);
            if (!verifyPermissions) return Unauthorized();
            var configuration = body.ToObject<CampaignConfiguration>();
            var updated = await _service.UpdateConfiguration(configuration, cancellationToken);
            return Ok(updated);
        } 
    }
}