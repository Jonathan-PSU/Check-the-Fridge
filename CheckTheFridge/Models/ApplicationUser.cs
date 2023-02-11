using Microsoft.AspNetCore.Identity;

namespace CheckTheFridge.Models
{
    public class ApplicationUser
    {
        int id { get; set; } = 0;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;

    }
}