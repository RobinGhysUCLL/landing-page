# robinghys.com Landing Page

Een minimale landing page voor het domein robinghys.com, gebouwd met Next.js en gedeployed via Docker.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Docker + Docker Compose
- **CI/CD**: GitHub Actions

## Development

Lokaal draaien voor development:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Deployment

De applicatie wordt automatisch gedeployed bij een push naar de main branch via GitHub Actions. Het deployment proces gebruikt:

- Multi-stage Docker build voor geoptimaliseerde image size
- Zero-downtime deployment strategie
- Health checks voor betrouwbare deployments
- Automatische rollback bij failures

## Project Structuur

```
landing-page/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Hoofdpagina
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Globale styles (Tailwind)
├── public/                # Statische assets
└── Dockerfile             # Multi-stage Docker build
```
