using Microsoft.EntityFrameworkCore.Migrations;

namespace EmailTimer.Migrations
{
    public partial class addedNamesToCampains : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Campaigns",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Campaigns",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Campaigns");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Campaigns");
        }
    }
}
