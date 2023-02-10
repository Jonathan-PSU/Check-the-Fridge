
using System.IO;

namespace CheckTheFridge.DBInterface
{
    public class DatabaseInterface
    {
        public string[] lines;
        public DatabaseInterface() 
        {
            lines = File.ReadAllLines(@"..\CheckTheFridge\Data\ApplicationUsers.txt");
        }

        public string GetName(string id)
        {

            foreach (string line in lines)
            {
                var fields = line.Split(',');
                if (fields[0] == id)
                    return fields[1];

            }

            return "wrong";
        }

    }
}
