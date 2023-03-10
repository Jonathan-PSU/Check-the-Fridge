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
                return BadRequest("User Does Not Exist");
            }
          
            return Ok(user);
        }

        [HttpGet("{Id}/GetUserIngredients")]
        public async Task<ActionResult<ApplicationUser>> GetUserIngredients(int Id)
        {
            var users = await _context.ApplicationUsers.Include("FridgeIngredients").ToListAsync();
            var user = users.Find(x => x.Id == Id);
            

            if (user == null)
            {
                return BadRequest("User Does Not Exist");
            }

            return Ok(user.FridgeIngredients);
        }

        //
        //POSTS
        //
        [HttpPost("Register/{FirstName}/{LastName}/{Username}/{Password}")]
        public async Task<IActionResult> Register(string FirstName, string LastName, string Username, string Password)
        {
            if (_context.ApplicationUsers.Any(u => u.Username == Username))
            {
                return BadRequest("Username Taken");
            }

            CreatePasswordHash(Password,
               out byte[] passwordHash,
               out byte[] passwordSalt);

            var user = new ApplicationUser
            {
                FirstName= FirstName,
                LastName= LastName,
                Username= Username,
                pass
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

            if (!VerifyPasswordHash(Password, user.PasswordHash, user.PasswordSalt))
            {
                return BadRequest("Password wrong");
            }

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

        //
        //PRIVATE
        //
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac
                    .ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }
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
