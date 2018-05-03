using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentPortalAPI.Models
{
    public class Photo
    {
        public int id { get; set; }
        public string studentid { get; set; }
        public string image_name { get; set; }
    }
}