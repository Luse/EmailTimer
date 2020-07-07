using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EmailTimer.Controllers
{
    [Route("api/ca/Interest")]
    [ApiController]
    public class InterestListController : ControllerBase
    {
        private readonly InterestListService _service;

        public InterestListController(InterestListService service)
        {
            _service = service;
        }

        [AllowAnonymous]
        [HttpPost("add/{email}")]
        public async Task<ActionResult> Add(string email, CancellationToken cancellationToken)
        {
            await _service.AddEmailToInterestList(email, cancellationToken);
            return Ok();
        }
    }
}