using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using wyze_exporter.Models;

namespace wyze_exporter.Wyze
{
    internal class Auth
    {
        private WyzeAuth AuthCredentials { get; set; }
        private string AuthUrl { get; set; }

        public Auth()
        {
            AuthCredentials = new WyzeAuth();
            AuthUrl = "https://auth-prod.api.wyze.com";
        }

        public void Login()
        {

        }

        public void GetAuthCredentials()
        {
            if (null != Environment.GetEnvironmentVariable("WYZE_USERNAME"))
            {
                AuthCredentials.Email = Environment.GetEnvironmentVariable("WYZE_USERNAME");
            }

            if (null != Environment.GetEnvironmentVariable("WYZE_PASSWORD"))
            {
                AuthCredentials.Password = Environment.GetEnvironmentVariable("WYZE_PASSWORD");
            }

            if (null != Environment.GetEnvironmentVariable("WYZE_API_KEY"))
            {
                AuthCredentials.ApiKey = Environment.GetEnvironmentVariable("WYZE_API_KEY");
            }

            if (null != Environment.GetEnvironmentVariable("WYZE_API_TOKEN"))
            {
                AuthCredentials.ApiToken = Environment.GetEnvironmentVariable("WYZE_API_TOKEN");
            }
        }

        
    }
}
