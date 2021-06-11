namespace StudentPortalAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Education_Experience : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Educations",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        name = c.String(),
                        degree = c.String(),
                        field = c.String(),
                        grade = c.String(),
                        date_from = c.String(),
                        date_to = c.String(),
                        description = c.String(),
                        studentid = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.Experiences",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        company = c.String(),
                        location = c.String(),
                        date_from = c.String(),
                        date_to = c.String(),
                        result = c.String(),
                        description = c.String(),
                        currentjob = c.Boolean(nullable: false),
                        studentid = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Experiences");
            DropTable("dbo.Educations");
        }
    }
}
