using System;
using System.IO;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using EmailTimer.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace EmailTimer.Controllers
{
    [Route("api/c/[controller]")]
    [ApiController]
    public class CustomerController
    {
        private readonly CustomerService _service;

        public CustomerController(CustomerService service)
        {
            _service = service;
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register([FromBody] JObject body, CancellationToken cancellationToken)
        {
            var a = body.ToObject<LoginModel>();
            await _service.RegisterNewUser(a.Username, a.Password, cancellationToken);
            return new OkResult();
        }

        private class LoginModel
        {
            public string Username { get; set; }
            public string Password { get; set; }
        }
    }
}