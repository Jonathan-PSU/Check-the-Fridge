using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace CheckTheFridge.Models
{
    public class Ingredient
    {
        public int Id { get; set; }
        public int MealDbId { get; set; } = 0;
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int Quantity { get; set; } = 0;
        public ApplicationUser ? ApplicationUser { get; set; }
    }
}