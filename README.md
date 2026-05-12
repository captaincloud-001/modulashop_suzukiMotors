# ModulaShop — Enterprise Micro-Frontend Platform

A production-grade micro-frontend e-commerce platform demonstrating enterprise frontend architecture patterns used by companies like Zalando, IKEA, and Amazon.

## Live Architecture

Browser → Shell App (port 3000)
├── Auth Module (port 3001)
├── Products Module (port 3002) → GraphQL API (port 4000)
└── Orders Module (port 3003)  → GraphQL API (port 4000)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript |
| Module Federation | Webpack 5 + @module-federation/enhanced |
| API | Apollo Server 4 (GraphQL) |
| Data Fetching | Apollo Client 3 |
| Containerization | Docker + Docker Compose |
| CI/CD | GitHub Actions + Lighthouse CI |
| Runtime | Node.js 20 |

## Key Features

**Independent Deployability** — Each micro-frontend (Auth, Products, Orders) is a standalone React app that can be built, tested, and deployed without touching other modules.

**Shared React Singleton** — Module Federation ensures only one React instance runs across all apps, preventing version conflicts and reducing bundle size.

**Live GraphQL Data** — Products and Orders modules fetch real data from an Apollo GraphQL server with typed schemas.

**Docker Containerization** — All 5 services run in isolated containers. One command starts the entire platform.

**Automated CI Pipeline** — GitHub Actions runs on every push, installs dependencies, builds the shell app, and runs performance audits.

## Running Locally

### Option 1 — Docker (recommended)
```bash
git clone https://github.com/captaincloud-001/modulashop_suzukiMotors.git
cd modulashop_suzukiMotors
docker-compose up
```
Visit `http://localhost:3000`

### Option 2 — Manual (5 terminals)
```bash
# Terminal 1 — GraphQL API
cd graphql-server && node index.js

# Terminal 2
cd remote-auth && npm install && npm start

# Terminal 3
cd remote-products && npm install --legacy-peer-deps && npm start

# Terminal 4
cd remote-orders && npm install --legacy-peer-deps && npm start

# Terminal 5 — Start last
cd shell-app && npm install --legacy-peer-deps && npm start
```

## Project Structure

modulashop/
├── shell-app/          # Host app — navigation + module loader
├── remote-auth/        # Auth micro-frontend (port 3001)
├── remote-products/    # Products micro-frontend (port 3002)
├── remote-orders/      # Orders micro-frontend (port 3003)
├── graphql-server/     # Apollo GraphQL API (port 4000)
├── docker-compose.yml  # Orchestrates all 5 services
└── .github/workflows/  # CI/CD pipeline


## Architecture Decisions

**Why Module Federation?**
Traditional micro-frontends use iframes or npm packages. Module Federation loads remote components at runtime — no rebuilding the shell when a remote changes. This enables true independent deployability.

**Why GraphQL?**
REST APIs return fixed data shapes. GraphQL lets each module request exactly the fields it needs, reducing over-fetching. The shared schema acts as a contract between frontend and backend teams.

**Why Docker?**
5 services running on different ports is complex to set up locally. Docker Compose reduces onboarding from 30 minutes to one command.

## What I Learned

- Webpack 5 Module Federation configuration and troubleshooting
- GraphQL schema design with Apollo Server 4
- Apollo Client integration with React hooks (useQuery)
- Docker multi-service orchestration
- GitHub Actions CI/CD pipeline setup
- Solving React singleton issues across federated modules
- TypeScript declaration files for federated module types

## Screenshots

**Products Module** — Live data from GraphQL API with In Stock / Out of Stock badges

**Orders Module** — Real-time order tracking with color-coded status indicators

**Auth Module** — Independent authentication module loaded at runtime