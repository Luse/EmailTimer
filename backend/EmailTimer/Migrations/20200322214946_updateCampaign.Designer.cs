﻿// <auto-generated />
using System;
using EmailTimer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace EmailTimer.Migrations
{
    [DbContext(typeof(EmailTimerContext))]
    [Migration("20200322214946_updateCampaign")]
    partial class updateCampaign
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("EmailTimer.Models.Campaign", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<long?>("ConfigurationId")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<long?>("CustomerId")
                        .HasColumnType("bigint");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<DateTime?>("LastUpdatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("ConfigurationId");

                    b.HasIndex("CustomerId");

                    b.ToTable("Campaigns");
                });

            modelBuilder.Entity("EmailTimer.Models.CampaignConfiguration", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("BackgroundColor")
                        .HasColumnType("text");

                    b.Property<string>("Font")
                        .HasColumnType("text");

                    b.Property<string>("FontColor")
                        .HasColumnType("text");

                    b.Property<int>("FontSize")
                        .HasColumnType("integer");

                    b.Property<string>("TimeoutText")
                        .HasColumnType("text");

                    b.Property<int>("TimerHeight")
                        .HasColumnType("integer");

                    b.Property<int>("TimerWidth")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("CampaignConfigurations");
                });

            modelBuilder.Entity("EmailTimer.Models.Customer", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<DateTime?>("LastUpdatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("text");

                    b.Property<string>("Token")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("EmailTimer.Models.Timer", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<long>("CampaignId")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime?>("LastUpdatedAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Note")
                        .HasColumnType("text");

                    b.Property<DateTime>("TargetDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("WebAccessor")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CampaignId");

                    b.ToTable("Timers");
                });

            modelBuilder.Entity("EmailTimer.Models.Campaign", b =>
                {
                    b.HasOne("EmailTimer.Models.CampaignConfiguration", "Configuration")
                        .WithMany()
                        .HasForeignKey("ConfigurationId");

                    b.HasOne("EmailTimer.Models.Customer", null)
                        .WithMany("Campaigns")
                        .HasForeignKey("CustomerId");
                });

            modelBuilder.Entity("EmailTimer.Models.Timer", b =>
                {
                    b.HasOne("EmailTimer.Models.Campaign", null)
                        .WithMany("Timers")
                        .HasForeignKey("CampaignId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}