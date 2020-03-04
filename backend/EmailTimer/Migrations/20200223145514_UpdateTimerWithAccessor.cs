using Microsoft.EntityFrameworkCore.Migrations;

namespace EmailTimer.Migrations
{
    public partial class UpdateTimerWithAccessor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "WebAccessor",
                table: "Timers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WebAccessor",
                table: "Timers");
        }
    }
}
