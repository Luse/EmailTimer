using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EmailTimer.Migrations
{
    public partial class UpdateTimerWithCreateUpdateTimestamps : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Timers",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone");

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "Timers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "Timers");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Timers",
                type: "timestamp without time zone",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);
        }
    }
}
