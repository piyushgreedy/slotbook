using System;
using MySql.Data.MySqlClient;

namespace Slotly.Models
{
    public class LoginContext
    {
        public string ConnectionString { get; set; }

        public LoginContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }

        public Boolean verifyLoginValues(string username, string password)
        {
            Console.WriteLine("Piyush Test Connection");
            Console.WriteLine(this.ConnectionString);

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("select * from login_slot_book", conn);
                Console.WriteLine(cmd);
                using (MySqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        Console.WriteLine("Piyush connected Connection");
                        Console.WriteLine(dr.GetString("username"));
                        Console.WriteLine(dr.GetString("password"));
                        if(username== dr.GetString("username") && password== dr.GetString("password"))
                        {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        public Boolean insertSlotDetail(string username, int startTime, int endTime, int dateTimeStamp)
        {
            return true;
        }

        public void getLoginDetails(string username)
        {
            Console.WriteLine("Piyush Test Connection");
            Console.WriteLine(this.ConnectionString);
            
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("select * from login_slot_book", conn);
                Console.WriteLine(cmd);
         
                using (MySqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        Console.WriteLine("Piyush connected Connection");
                        Console.WriteLine(dr.GetString("username"));
                        Console.WriteLine(dr.GetString("password"));
                    }
                }
            }
        }   
    }
}
