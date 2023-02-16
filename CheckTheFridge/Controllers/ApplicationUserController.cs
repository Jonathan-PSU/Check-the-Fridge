using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CheckTheFridge.DBInterface;
using CheckTheFridge.Models;

namespace CheckTheFridge.Controllers
{
    [Route("[controller]")]
    [ApiController]

    public class ApplicationUserController : ControllerBase
    {
        private readonly DataContext _context;
        public ApplicationUserController(DataContext context) 
        {
            _context = context;
        }
       
        [HttpGet("get")]

        
        public async Task<ActionResult<List<ApplicationUser>>> GetUsers()
        {
     
             return Ok(await _context.ApplicationUsers.ToListAsync());
        }

        /*
        [HttpGet("get")]

        
        public async IAsyncEnumerable<ApplicationUser> GetUser()
        {
            var users = _context.ApplicationUsers.AsAsyncEnumerable();
            await foreach (var u in users)
                yield return u;
        }
        [HttpGet]
        public ApplicationUser GetUser(string id)
        {
            DatabaseInterface db = new DatabaseInterface();
            var user = new ApplicationUser();
            user.Username = db.GetById(id, "username");
            user.FirstName = db.GetById(id, "firstname");
            user.LastName = db.GetById(id, "lastname");
            user.Password = db.GetById(id, "password");
            return user;
        }

        [HttpGet("PasswordValidation")]
        public int PasswordValidation(string username, string password)
        {
            DatabaseInterface db = new DatabaseInterface();

            return db.PasswordValidation(username, password);
        }

        [HttpPost("CreateUser")]
        public int CreateUser(string firstname, string lastname, string username, string password)
        {
            DatabaseInterface db = new DatabaseInterface();

            return db.CreateUser(firstname, lastname, username, password);
        }
        */

    }
}
