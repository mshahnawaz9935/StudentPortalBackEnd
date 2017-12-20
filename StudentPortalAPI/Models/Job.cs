using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentPortalAPI.Models
{
    public class Job
    {
        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string date { get; set; }
        public int companyid { get; set; }
    }
}