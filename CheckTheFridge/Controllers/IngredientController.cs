using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CheckTheFridge.DBInterface;
using CheckTheFridge.Models;
using System.Security.Cryptography;

namespace CheckTheFridge.Controllers
{
    [Route("[controller]")]
    [ApiController]

    public class IngredientController : ControllerBase
    {
        private readonly DataContext _context;
        public IngredientController(DataContext context) 
        {
            _context = context;
        }
        //
        //GETS
        //
        [HttpGet("GetIngredients")]
        public async Task<ActionResult<List<Ingredient>>> GetIngredients()
        {
             return Ok(await _context.Ingredients.ToListAsync());
        }

        [HttpGet("{Id}/GetIngredient")]
        public async Task<ActionResult<Ingredient>> GetIngredient(int Id)
        {
            var ingredient = await _context.Ingredients.FindAsync(Id);

            if (ingredient == null)
            {
                return BadRequest("Ingredient doesnt Exist");
            }
          
            return Ok(ingredient);
        }

        //
        //POSTS
        //
        [HttpPost("Add/{Name}/{Description}/{Id}/{Quantity}")]
        public async Task<IActionResult> Add(string Name, string Description, string Id, int Quantity)
        {
            if (_context.Ingredients.Any(i => i.Name == Name))
            {
                return BadRequest("Ingredient already exists");
            }

            var ingredient = new Ingredient
            {
                Name= Name,
                Description= Description,
                Quantity=Quantity,
                Id =Id
            };

            _context.Ingredients.Add(ingredient);
            await _context.SaveChangesAsync();
            return Ok("Ingredient created!");
        }
        //Edit ingredient
        [HttpPost("Edit/{Name}/{Description}")]
        public async Task<IActionResult> Edit(int Id, string Name, string Description)
        {
            var ingredient = await _context.Ingredients.FindAsync(Id);
            if (ingredient == null)
            {
                return BadRequest("Could not find ingredient");
            }

            ingredient.Name = Name;
            ingredient.Description = Description;

            return Ok("Ingredient edited!");
        }

        //
        //DELETES
        //
        [HttpDelete]
        public async Task<IActionResult> Delete(int Id)
        {
            var ingredient = await _context.Ingredients.FindAsync(Id);

            if (ingredient == null)
            {
                return BadRequest("Ingredient doesn't Exist");
            }

            _context.Ingredients.Remove(ingredient);
            await _context.SaveChangesAsync();
            return Ok("Ingredient deleted!");
        }
    }
}
