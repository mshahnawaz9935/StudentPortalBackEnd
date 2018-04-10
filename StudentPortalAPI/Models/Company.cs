using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentPortalAPI.Models
{
    public class Company
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string about { get; set;}
        public string Emp_Id { get; set; }
    }
}