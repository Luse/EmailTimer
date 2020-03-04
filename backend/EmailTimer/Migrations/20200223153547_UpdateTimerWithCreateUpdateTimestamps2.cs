using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EmailTimer.Migrations
{
    public partial class UpdateTimerWithCreateUpdateTimestamps2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "Timers");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Timers",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone",
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "LastUpdatedAt",
                table: "Timers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LastUpdatedAt",
                table: "Timers");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Timers",
                type: "timestamp without time zone",
                nullable: true,
                oldClrType: typeof(DateTime));

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "Timers",
                type: "timestamp without time zone",
                nullable: true);
        }
    }
}
