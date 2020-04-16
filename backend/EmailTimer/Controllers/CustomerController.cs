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
        public async Task<IActionResult> IsLoggedIn(CancellationToken cancellationToken)
        {
            var currentUser = HttpContext.User.FindFirst(ClaimTypes.Email)?.Value;
            return Ok(currentUser);
        }
        [AllowAnonymous]
        [HttpPost("Register")]
        public async Task<ActionResult> Register([FromBody] JObject body, CancellationToken cancellationToken)
        {
            var a = body.ToObject<LoginModel>();
            var newUser = await _service.RegisterNewUser(a.Email, a.Password, cancellationToken);
            if (newUser == null) return ValidationProblem("Username is already registered");
            var result = await _service.Login(a.Email, a.Password, cancellationToken);
            if (result is null) return Forbid();
            return Ok(new IsLoggedInResult{Email = a.Email, Token = result});
        }
        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<ActionResult> Login([FromBody] JObject body, CancellationToken cancellationToken)
        {
            var a = body.ToObject<LoginModel>();
            var result = await _service.Login(a.Email, a.Password, cancellationToken);
            if (result is null) return ValidationProblem("Wrong username or password");
            return Ok(new IsLoggedInResult{Email = a.Email, Token = result});
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

    public class IsLoggedInResult
    {
        public string Email { get; set; }
        public string Token { get; set; }
    }
}