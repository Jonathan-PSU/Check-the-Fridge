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

        /*
            public string email { get; set; } = string.Empty;
            public string phone { get; set; }
            public string phoneNumber { get; set; }
            public string emailConfirmed { get; set; }
            public string passwordConfirmed { get; set; }
            public string phoneConfirmed { get; set; }
        */

    }
}