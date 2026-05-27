using PortfolioApi.Models;

namespace PortfolioApi.Services;

/// <summary>
/// Provides portfolio data. In a real app this would connect to a database.
/// Swap the hardcoded values here with your own info!
/// </summary>
public class PortfolioDataService
{
    public PortfolioData GetPortfolioData() => new PortfolioData
    {
        Hero = new HeroData
        {
            Greeting = "Hi, I'm",
            Name = "Karlie",
            Tagline = "Information Systems grad who thinks good design and clean code belong together.",
            Cta = "See My Work",
            CtaSecondary = "About Me"
        },

        About = new AboutData
        {
            Bio = "I'm a recent Information Systems graduate with a passion for bridging the gap between technology and creativity. " +
                  "I love building things that are both functional and beautiful — whether that's a polished web app, a thoughtfully designed UI, " +
                  "or a data-driven solution that actually makes sense to the people using it.",
            Highlights = new List<string>
            {
                "B.S. Information Systems — BYU",
                "Loves UI/UX + full-stack development",
                "Figma to React pipeline enthusiast",
                "Always learning something new"
            }
        },

        Projects = new List<Project>
        {
            new Project
            {
                Id = 1,
                Title = "Brand Identity System",
                Description = "Designed a complete visual identity for a local small business — logo, color palette, typography, and component library in Figma.",
                Tags = new List<string> { "Figma", "Branding", "Design" },
                TagColor = "coral",
                Emoji = "🎨",
                Color = "#FFE8E8"
            },
            new Project
            {
                Id = 2,
                Title = "Full-Stack Dashboard",
                Description = "Built a real-time analytics dashboard with React + .NET API backend, featuring live charts, filtering, and user authentication.",
                Tags = new List<string> { "React", ".NET", "SQL", "Charts" },
                TagColor = "purple",
                Emoji = "📊",
                Color = "#EEEEFF"
            },
            new Project
            {
                Id = 3,
                Title = "UX Research Study",
                Description = "Conducted user interviews and usability tests for a campus app redesign. Delivered wireframes and a final prototype with measurable improvements.",
                Tags = new List<string> { "UX Research", "Figma", "Prototyping" },
                TagColor = "mint",
                Emoji = "🔍",
                Color = "#E0FBF4"
            },
            new Project
            {
                Id = 4,
                Title = "E-commerce Web App",
                Description = "Developed a full-featured e-commerce site with product listings, cart, and checkout — built with React, .NET Web API, and a SQL Server database.",
                Tags = new List<string> { "React", ".NET", "SQL Server" },
                TagColor = "yellow",
                Emoji = "🛒",
                Color = "#FFF8E0"
            }
        },

        Skills = new SkillsData
        {
            Technical = new List<Skill>
            {
                new Skill { Name = "React / JavaScript", Level = 90 },
                new Skill { Name = "C# / .NET", Level = 85 },
                new Skill { Name = "SQL / Databases", Level = 80 },
                new Skill { Name = "HTML & CSS", Level = 95 },
                new Skill { Name = "Python", Level = 70 },
                new Skill { Name = "Git & Version Control", Level = 85 },
            },
            Creative = new List<Skill>
            {
                new Skill { Name = "Figma & Prototyping", Level = 92 },
                new Skill { Name = "UI/UX Design", Level = 88 },
                new Skill { Name = "Brand Identity", Level = 80 },
                new Skill { Name = "Typography & Color", Level = 85 },
            },
            Tools = new List<string>
            {
                "VS Code", "Visual Studio", "Figma", "Postman",
                "GitHub", "Azure", "Notion", "Adobe Suite"
            }
        }
    };
}
