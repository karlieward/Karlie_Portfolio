# Karlie's Portfolio — React + .NET

A personal portfolio website with a React (Vite) frontend and a .NET 8 Web API backend.

---

## Project Structure

```
karlie-portfolio/
├── frontend/       # React app (Vite)
└── backend/        # ASP.NET Core Web API
```

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [.NET 8 SDK](https://dotnet.microsoft.com/download)

---

### Run the Backend

```bash
cd backend
dotnet run
```

The API will start at `http://localhost:5000`.  
Swagger docs available at `http://localhost:5000/swagger`.

**API Endpoints:**
| Method | Path | Description |
|--------|------|-------------|
| GET | /api/portfolio | All portfolio data |
| GET | /api/portfolio/projects | Projects list |
| GET | /api/portfolio/projects/:id | Single project |
| GET | /api/portfolio/skills | Skills data |
| POST | /api/contact | Submit contact form |

---

### Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

The React app will start at `http://localhost:5173`.  
The Vite proxy forwards `/api` requests to the .NET backend automatically.

---

## Customizing Your Content

All your portfolio data lives in one place:

**`backend/Services/PortfolioDataService.cs`**

Edit the values there to update your name, bio, projects, skills, and more. No database setup needed to get started — just change the strings and restart the backend.

### Adding Your Photo
Replace the `K` avatar in `About.jsx` and `Hero.jsx` with an `<img>` tag pointing to your photo. Put the image in `frontend/public/` and reference it as `/your-photo.jpg`.

---

## Deploying

**Frontend:** Build with `npm run build` → deploy the `dist/` folder to Netlify, Vercel, or Azure Static Web Apps.

**Backend:** Publish with `dotnet publish` → deploy to Azure App Service, Fly.io, or any .NET host.

---

## Tech Stack
- **Frontend:** React 18, Vite, CSS custom properties
- **Backend:** ASP.NET Core 8 Web API, C#
- **Design:** Custom CSS, Google Fonts (Plus Jakarta Sans + Inter)
