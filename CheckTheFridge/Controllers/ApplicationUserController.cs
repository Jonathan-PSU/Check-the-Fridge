using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CheckTheFridge.DBInterface;
using CheckTheFridge.Models;
using System.Security.Cryptography;

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
        //
        //GETS
        //
        [HttpGet("GetUsers")]
        public async Task<ActionResult<List<ApplicationUser>>> GetUsers()
        {
             return Ok(await _context.ApplicationUsers.ToListAsync());
        }

        [HttpGet("{Id}/GetUser")]
        public async Task<ActionResult<ApplicationUser>> GetUser(int Id)
        {
            var user = await _context.ApplicationUsers.FindAsync(Id);

            if (user == null)
            {
                return BadRequest("Doesnt Exist");
            }
          
            return Ok(user);
        }

        //
        //POSTS
        //
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegisterRequest request)
        {
            if (_context.ApplicationUsers.Any(u => u.Username == request.Username))
            {
                return BadRequest("Username Taken");
            }

            var user = new ApplicationUser
            {
                FirstName= request.FirstName,
                LastName= request.LastName,
                Username = request.Username,
                Password= request.Password
            };

            _context.ApplicationUsers.Add(user);
            await _context.SaveChangesAsync();
            return Ok("User created!");
        }

        [HttpPost("Login/{Username}/{Password}")]
        public async Task<IActionResult> Login(string Username, string Password)
        {
            var user = await _context.ApplicationUsers.FirstOrDefaultAsync(u => u.Username == Username);
            if (user == null)
            {
                return BadRequest("NOpe");
            }

            if (user.Password != Password)
            {
                return BadRequest("Password wrong");
            }

            //return Ok($"Welcome back, {user.Username}! :)");
            return Ok(user.Id);
        }

        //
        //DELETES
        //
        [HttpDelete]
        public async Task<IActionResult> Delete(int Id)
        {
            var user = await _context.ApplicationUsers.FindAsync(Id);

            if (user == null)
            {
                return BadRequest("Doesnt Exist");
            }

            _context.ApplicationUsers.Remove(user);
            await _context.SaveChangesAsync();
            return Ok("Deleted!");
        }

        //
        //PUTS
        //

        /* FORMERLY USING TEXT DATABASE
         * 
         * 
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
