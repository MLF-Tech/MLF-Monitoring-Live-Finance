# 📘 MLF Technical Glossary & Dev Notes

This document records the technical decisions, tools, and initialization process used in the MLF project.

---

## 🧠 Architectural Decisions

_This section explains the "Why" behind the project structure._

- **Monorepo vs Polyrepo:** I chose a Monorepo structure to keep both the React client and Express server in a single history, making it easier to manage atomic commits and shared documentation.
- **Environment Isolation:** Sensitive data like API keys are never pushed to GitHub. I use `.env` files and a global `.gitignore` to follow industry security standards.
- **RESTful Routing:** The endpoint `/api/stock/:ticker` uses a **URL Parameter** (`:ticker`) to make the API flexible. This allows the server to fetch data for any valid stock symbol without needing multiple endpoints.

---

## 🚀 Step-by-Step Initialization

_A record of how the environment was built from scratch._

### Backend Setup (`server/`)

1. **Init:** `npm init -y` (Created package.json)
2. **Core Packages:** `npm install express cors dotenv axios`
3. **Dev Tools:** `npm install typescript ts-node ts-node-dev @types/node @types/express @types/cors --save-dev`
4. **TS Config:** `npx tsc --init` (Configured for CommonJS and ./src root)
5. **Entry Point:** Created `src/index.ts` with an asynchronous Axios handler.

---

## ⚙️ Key Concepts & Tools

- **Axios:** A promise-based HTTP client used to fetch data from the Alpha Vantage Financial API.
- **CORS:** Cross-Origin Resource Sharing, configured to allow the React frontend to communicate with the Express backend safely.
- **Graceful Degradation:** The backend handles API limits or invalid tickers by returning specific HTTP status codes (404/500) instead of crashing.
