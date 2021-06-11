namespace StudentPortalAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Company : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Companies", "about", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Companies", "about");
        }
    }
}
