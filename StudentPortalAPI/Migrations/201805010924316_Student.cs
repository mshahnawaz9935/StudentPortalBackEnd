namespace StudentPortalAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Student : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Students", "summary", c => c.String());
            AddColumn("dbo.Students", "experience", c => c.String());
            AddColumn("dbo.Students", "studentid", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Students", "studentid");
            DropColumn("dbo.Students", "experience");
            DropColumn("dbo.Students", "summary");
        }
    }
}
