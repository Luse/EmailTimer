using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace EmailTimer.Migrations
{
    public partial class createdCampaings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "Timers");

            migrationBuilder.AddColumn<long>(
                name: "CampaignId",
                table: "Timers",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateTable(
                name: "CampaignConfigurations",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TimerWidth = table.Column<int>(nullable: false),
                    TimerHeight = table.Column<int>(nullable: false),
                    Font = table.Column<string>(nullable: true),
                    FontColor = table.Column<string>(nullable: true),
                    FontSize = table.Column<int>(nullable: false),
                    BackgroundColor = table.Column<string>(nullable: true),
                    TimeoutText = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CampaignConfigurations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Campaigns",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    LastUpdatedAt = table.Column<DateTime>(nullable: true),
                    ConfigurationId = table.Column<long>(nullable: true),
                    CustomerId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Campaigns", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Campaigns_CampaignConfigurations_ConfigurationId",
                        column: x => x.ConfigurationId,
                        principalTable: "CampaignConfigurations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Campaigns_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Timers_CampaignId",
                table: "Timers",
                column: "CampaignId");

            migrationBuilder.CreateIndex(
                name: "IX_Campaigns_ConfigurationId",
                table: "Campaigns",
                column: "ConfigurationId");

            migrationBuilder.CreateIndex(
                name: "IX_Campaigns_CustomerId",
                table: "Campaigns",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Timers_Campaigns_CampaignId",
                table: "Timers",
                column: "CampaignId",
                principalTable: "Campaigns",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Timers_Campaigns_CampaignId",
                table: "Timers");

            migrationBuilder.DropTable(
                name: "Campaigns");

            migrationBuilder.DropTable(
                name: "CampaignConfigurations");

            migrationBuilder.DropIndex(
                name: "IX_Timers_CampaignId",
                table: "Timers");

            migrationBuilder.DropColumn(
                name: "CampaignId",
                table: "Timers");

            migrationBuilder.AddColumn<long>(
                name: "CustomerId",
                table: "Timers",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);
        }
    }
}
