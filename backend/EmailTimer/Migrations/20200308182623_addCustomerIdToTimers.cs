﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace EmailTimer.Migrations
{
    public partial class addCustomerIdToTimers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "CustomerId",
                table: "Timers",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "Timers");
        }
    }
}
