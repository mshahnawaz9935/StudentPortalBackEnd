using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace StudentPortalAPI.Models
{
    public class Education
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string degree { get; set; }
        public string field { get; set; }
        public string grade { get; set; }
        public string date_from { get; set; }
        public string date_to { get; set; }
        public string description { get; set; }
        public string studentid { get; set; }
    }
}