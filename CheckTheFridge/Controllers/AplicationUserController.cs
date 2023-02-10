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
        public async Task<ActionResult<ApplicationUser>> Get(string id)
        {
            DatabaseInterface db= new DatabaseInterface();
            var user = new ApplicationUser();
            //user.username = db.GetName(id);
            user.UserName = "lil";
            user.firstName = "Test";
            user.lastName= "Test";
            user.password= "Test";
            return Ok(user);
        }
        
    }
}
