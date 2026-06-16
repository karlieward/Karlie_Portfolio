using Microsoft.AspNetCore.Mvc;
using PortfolioApi.Models;
using PortfolioApi.Services;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly ILogger<ContactController> _logger;
    private readonly IEmailService _emailService;

    public ContactController(ILogger<ContactController> logger, IEmailService emailService)
    {
        _logger = logger;
        _emailService = emailService;
    }

    /// <summary>
    /// Receives a contact form submission and sends via SendGrid.
    /// </summary>
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] ContactMessage message)
    {
        if (string.IsNullOrWhiteSpace(message.Name) ||
            string.IsNullOrWhiteSpace(message.Email) ||
            string.IsNullOrWhiteSpace(message.Message))
        {
            return BadRequest(new { error = "All fields are required." });
        }

        // Send email via SendGrid
        var emailSent = await _emailService.SendContactEmailAsync(message.Name, message.Email, message.Message);

        if (emailSent)
        {
            _logger.LogInformation(
                "Contact message from {Name} <{Email}> sent successfully",
                message.Name, message.Email);
            return Ok(new { success = true, received = DateTime.UtcNow });
        }

        _logger.LogError("Failed to send contact message from {Name}", message.Name);
        return StatusCode(500, new { error = "Failed to send message. Please try again." });
    }
}
