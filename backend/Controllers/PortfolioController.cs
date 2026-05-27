using Microsoft.AspNetCore.Mvc;
using PortfolioApi.Models;
using PortfolioApi.Services;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PortfolioController : ControllerBase
{
    private readonly PortfolioDataService _dataService;

    public PortfolioController(PortfolioDataService dataService)
    {
        _dataService = dataService;
    }

    /// <summary>Returns all portfolio data in one call.</summary>
    [HttpGet]
    public ActionResult<PortfolioData> Get()
    {
        return Ok(_dataService.GetPortfolioData());
    }

    /// <summary>Returns only the projects list.</summary>
    [HttpGet("projects")]
    public ActionResult<List<Project>> GetProjects()
    {
        return Ok(_dataService.GetPortfolioData().Projects);
    }

    /// <summary>Returns a single project by ID.</summary>
    [HttpGet("projects/{id}")]
    public ActionResult<Project> GetProject(int id)
    {
        var project = _dataService.GetPortfolioData().Projects.FirstOrDefault(p => p.Id == id);
        if (project is null) return NotFound();
        return Ok(project);
    }

    /// <summary>Returns skills data.</summary>
    [HttpGet("skills")]
    public ActionResult<SkillsData> GetSkills()
    {
        return Ok(_dataService.GetPortfolioData().Skills);
    }
}
