using Microsoft.AspNetCore.Identity;

namespace CheckTheFridge.Models
{
    public class ApplicationUser : IdentityUser
    {
        int id { get; set; } = 0;
        public string UserName { get; set; } = string.Empty;
        public string firstName { get; set; } = string.Empty;
        public string lastName { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;

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