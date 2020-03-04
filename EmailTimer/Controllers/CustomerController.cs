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
        [HttpPost("Register")]
        public async Task<ActionResult> Register([FromBody] JObject body, CancellationToken cancellationToken)
        {
            var a = body.ToObject<object>();
            return new OkResult();
        }
    }
}