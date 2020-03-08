using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace EmailTimer.Controllers
{
    [Route("api/c/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerService _service;

        public CustomerController(CustomerService service)
        {
            _service = service;
        }
        [Authorize]
        [HttpGet("IsLoggedIn")]
        public async Task<IActionResult> IsLoggedIn()
        {
            var currentUser = HttpContext.User.FindFirst(ClaimTypes.Email)?.Value;
            return Ok(currentUser);
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register([FromBody] JObject body, CancellationToken cancellationToken)
        {
            var a = body.ToObject<LoginModel>();
            await _service.RegisterNewUser(a.Email, a.Password, cancellationToken);
            return await _service.Login(a.Email, a.Password, cancellationToken);
        }
        
        [HttpPost("Login")]
        public async Task<ActionResult> Login([FromBody] JObject body, CancellationToken cancellationToken)
        {
            var a = body.ToObject<LoginModel>();
            
            return await _service.Login(a.Email, a.Password, cancellationToken);
        }
        
        [HttpPost("Logout")]
        public async Task<ActionResult> Login(CancellationToken cancellationToken)
        {
            return new SignOutResult();
        }

        private class LoginModel
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }
    }
}