
using System.IO;
using System.Linq.Expressions;

namespace CheckTheFridge.DBInterface
{
    public class DatabaseInterface
    {
        public string[] lines;
        public DatabaseInterface() 
        {
            lines = File.ReadAllLines(@"..\CheckTheFridge\Data\ApplicationUsers.txt");
        }

        public string GetById(string id, string field)
        {
            field.ToLower();
            int field_num = -1;
            switch (field)
            {
                case "firstname":
                    // code block
                    field_num = 1;
                    break;
                case "lastname":
                    // code block
                    field_num = 2;
                    break;
                case "username":
                    // code block
                    field_num = 3;
                    break;
                case "password":
                    // code block
                    field_num = 4;
                    break;
                default:
                    // code block
                    break;
            }
            if (field_num >= 1)
            {
                foreach (string line in lines)
                {
                    var fields = line.Split(',');
                    if (fields[0] == id)
                        return fields[field_num];
                }
            }
            return "wrong";
        }

        public int PasswordValidation(string username, string password)
        {
                foreach (string line in lines)
                {
                    var fields = line.Split(',');
                    if (fields[3] == username)
                    {
                        if (fields[4] == password) 
                            return int.Parse(fields[0]);
                    }               
                }
            return 0;
        }

        public int CreateUser(string firstname, string lastname, string username, string password)
        {
            int linecount = lines.Length - 1;
            
            int newID = int.Parse(lines[linecount].Split(",")[0]) + 1;

            using (StreamWriter w = File.AppendText(@"..\CheckTheFridge\Data\ApplicationUsers.txt"))
            {
                
                w.WriteLine(newID + "," + firstname + "," + lastname + "," + username + "," + password);
            }
            return newID;
        }
    }
}
