using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wyze_exporter.Models
{
    internal class WyzeAuth
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string ApiKey { get; set; }
        public string ApiToken { get; set; }
    }
}
