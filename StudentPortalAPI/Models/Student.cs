using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentPortaAPI.Models
{
    public class Student
    {
        public int id { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public string phone { get; set; }
        public string college { get; set; }
        public string result { get; set; }
    }
}