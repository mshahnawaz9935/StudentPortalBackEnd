﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace StudentPortal.Models
{
    public class StudentPortalContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public StudentPortalContext() : base("name=StudentPortalContext")
        {
        }

        public System.Data.Entity.DbSet<StudentPortal.Models.Student> Students { get; set; }

        public System.Data.Entity.DbSet<StudentPortal.Models.Company> Companies { get; set; }

        public System.Data.Entity.DbSet<StudentPortal.Models.Job> Jobs { get; set; }

        public System.Data.Entity.DbSet<StudentPortal.Models.AppliedJobs> AppliedJobs { get; set; }
        public System.Data.Entity.DbSet<StudentPortal.Models.User> Users { get; set; }
    }
}
