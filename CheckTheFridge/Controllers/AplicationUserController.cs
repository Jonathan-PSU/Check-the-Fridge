using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CheckTheFridge.DBInterface;
using CheckTheFridge.Models;

namespace CheckTheFridge.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AplicationUserController : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<ApplicationUser>> GetUser(string id)
        {
            DatabaseInterface db = new DatabaseInterface();
            var user = new ApplicationUser();
            user.Username = db.GetById(id, "username");
            user.FirstName = db.GetById(id, "firstname");
            user.LastName = db.GetById(id, "lastname");
            user.Password = db.GetById(id, "password");
            return Ok(user);
        }

        [HttpGet("PasswordValidation")]
        public async Task<ActionResult<int>> PasswordValidation(string username, string password)
        {
            DatabaseInterface db = new DatabaseInterface();

            return db.PasswordValidation(username, password);
        }

        [HttpPost("CreateUser")]
        public async Task<ActionResult<int>> CreateUser(string firstname, string lastname, string username, string password)
        {
            DatabaseInterface db = new DatabaseInterface();

            return db.CreateUser(firstname, lastname, username, password);
        }
    
    }
}
