namespace PortfolioApi.Models;

public class PortfolioData
{
    public HeroData Hero { get; set; } = new();
    public AboutData About { get; set; } = new();
    public List<Project> Projects { get; set; } = new();
    public SkillsData Skills { get; set; } = new();
}

public class HeroData
{
    public string Greeting { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Tagline { get; set; } = string.Empty;
    public string Cta { get; set; } = string.Empty;
    public string CtaSecondary { get; set; } = string.Empty;
}

public class AboutData
{
    public string Bio { get; set; } = string.Empty;
    public List<string> Highlights { get; set; } = new();
}

public class Project
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<string> Tags { get; set; } = new();
    public string TagColor { get; set; } = "coral";
    public string Emoji { get; set; } = "🚀";
    public string Color { get; set; } = "#FFE8E8";
    public string? LiveUrl { get; set; }
    public string? GitHubUrl { get; set; }
}

public class SkillsData
{
    public List<Skill> Technical { get; set; } = new();
    public List<Skill> Creative { get; set; } = new();
    public List<string> Tools { get; set; } = new();
}

public class Skill
{
    public string Name { get; set; } = string.Empty;
    public int Level { get; set; }
}

public class ContactMessage
{
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
}
