namespace StudentPortal.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Third : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AppliedJobs",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        studentid = c.String(),
                        companyid = c.String(),
                        jobid = c.String(),
                        applydate = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.AppliedJobs");
        }
    }
}
