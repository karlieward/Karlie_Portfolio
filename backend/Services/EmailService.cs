using SendGrid;
using SendGrid.Helpers.Mail;

namespace PortfolioApi.Services;

public interface IEmailService
{
    Task<bool> SendContactEmailAsync(string name, string email, string message);
}

public class SendGridEmailService : IEmailService
{
    private readonly SendGridClient _client;
    private readonly string _fromEmail;
    private readonly ILogger<SendGridEmailService> _logger;

    public SendGridEmailService(IConfiguration config, ILogger<SendGridEmailService> logger)
    {
        var apiKey = config["SendGrid:ApiKey"];
        if (string.IsNullOrEmpty(apiKey))
            throw new InvalidOperationException("SendGrid API key not configured");

        _client = new SendGridClient(apiKey);
        _fromEmail = config["SendGrid:FromEmail"] ?? "noreply@karlie.dev";
        _logger = logger;
    }

    public async Task<bool> SendContactEmailAsync(string name, string email, string message)
    {
        try
        {
            var from = new EmailAddress(_fromEmail, "Karlie's Portfolio");
            var to = new EmailAddress("karlie3@byu.edu", "Karlie");
            var subject = $"New Contact Form Submission from {name}";

            var htmlContent = $@"
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> {System.Net.WebUtility.HtmlEncode(name)}</p>
                <p><strong>Email:</strong> {System.Net.WebUtility.HtmlEncode(email)}</p>
                <p><strong>Message:</strong></p>
                <p>{System.Net.WebUtility.HtmlEncode(message).Replace("\n", "<br>")}</p>
            ";

            var msg = new SendGridMessage()
            {
                From = from,
                Subject = subject,
                HtmlContent = htmlContent,
                ReplyToList = new List<EmailAddress> { new EmailAddress(email) }
            };
            msg.AddTo(to);

            var response = await _client.SendEmailAsync(msg);

            if (response.StatusCode == System.Net.HttpStatusCode.Accepted)
            {
                _logger.LogInformation("Email sent successfully for contact from {Name}", name);
                return true;
            }

            _logger.LogError("SendGrid returned status {StatusCode}", response.StatusCode);
            return false;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error sending email for contact from {Name}", name);
            return false;
        }
    }
}
