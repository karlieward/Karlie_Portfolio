using Microsoft.AspNetCore.Mvc;
using PortfolioApi.Models;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly ILogger<ContactController> _logger;

    public ContactController(ILogger<ContactController> logger)
    {
        _logger = logger;
    }

    /// <summary>
    /// Receives a contact form submission.
    /// Hook this up to SendGrid, Mailchimp, or a DB as needed.
    /// </summary>
    [HttpPost]
    public IActionResult Post([FromBody] ContactMessage message)
    {
        if (string.IsNullOrWhiteSpace(message.Name) ||
            string.IsNullOrWhiteSpace(message.Email) ||
            string.IsNullOrWhiteSpace(message.Message))
        {
            return BadRequest(new { error = "All fields are required." });
        }

        // TODO: integrate email service (e.g. SendGrid) or save to database
        _logger.LogInformation(
            "New contact message from {Name} <{Email}>: {Message}",
            message.Name, message.Email, message.Message);

        return Ok(new { success = true, received = DateTime.UtcNow });
    }
}
