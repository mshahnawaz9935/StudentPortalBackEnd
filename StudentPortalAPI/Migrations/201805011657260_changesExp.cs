namespace StudentPortalAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changesExp : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Experiences", "title", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Experiences", "title");
        }
    }
}
