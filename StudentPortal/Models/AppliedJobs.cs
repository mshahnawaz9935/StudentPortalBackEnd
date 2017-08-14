using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentPortal.Models
{
    public class AppliedJobs
    {
        public int id { get; set; }
        public string studentid { get; set; }
        public string companyid { get; set; }
        public string jobid { get; set; }
        public string applydate { get; set; }
    }
}