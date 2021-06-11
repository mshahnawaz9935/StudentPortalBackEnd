namespace StudentPortalAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Company2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Companies", "Emp_Id", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Companies", "Emp_Id");
        }
    }
}
