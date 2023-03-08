using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace CheckTheFridge.Models
{
    public class ApplicationUser
    {
        
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;

        public ICollection<Ingredient> ?Ingredients { get; set;} 

    }
}