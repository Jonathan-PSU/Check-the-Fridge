
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
            int fieldNum = -1;
            string toReturn = "error";
            field.ToLower();
            
            switch (field)
            {
                case "firstname":
                    fieldNum = 1;
                    break;
                case "lastname":
                    fieldNum = 2;
                    break;
                case "username":
                    fieldNum = 3;
                    break;
                case "password":
                    fieldNum = 4;
                    break;
                default:
                    break;
            }
            if (fieldNum >= 1)
            {
                foreach (string line in lines)
                {
                    var fields = line.Split(',');
                    if (fields[0] == id)
                    {
                        toReturn = fields[fieldNum];
                        break;
                    }
                }
            }
            return toReturn;
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
