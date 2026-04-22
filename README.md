# 🌟 **MLF** | Monitoring-Live-Finance 🌟

MLF - Monitoring Live Finance is a **Full-Stack portfolio app** for **simulated** stock portfolio management and **real-time data** visualisation on a modern Full-Stack Monorepo architecture.

[// Badges: Placeholder for CI/CD, deployment status, and code quality badges]

---

## 🖼️ Project Showcase

[// Placeholder: Add a GIF or screenshot of the application dashboard here once the frontend is built!]

---

## 🏗️ Architecture & Technology Stack

This project leverages a **Monorepo** structure to ensure shared standards, code consistency, and simplified atomic commits across the entire application lifecycle.

### 💻 Frontend (`client/`)

- **Technology Stack:** **React, TypeScript, Vite, Tailwind CSS**
- **Key Role:** Builds the **responsive User Interface (UI)**, handles client-side routing, and renders complex **Data Visualizations** (charts and dashboards).

### ⚙️ Backend (`server/`)

- **Technology Stack:** **Node.js, Express, TypeScript, ORM** (e.g., Prisma/TypeORM)
- **Key Role:** Exposes the **RESTful API**, manages business logic, performs secure **Data Fetching** from external financial APIs, and interacts with the Database.

### 💾 Database / Data Persistence

- **Technologies:** **PostgreSQL/MySQL** (managed via Docker)
- **Key Role:** Provides a reliable persistence layer for securely storing user data, portfolio holdings, and transaction history.

---

## ✨ Key Features

- **Real-time Data Integration:** Secure integration with a public Financial API to fetch up-to-date stock and asset pricing.
- **Simulated Portfolio Management:** Allows users to execute virtual Buy/Sell transactions and track their investment performance over time.
- **Performance Monitoring:** Interactive dashboards and charts to visualize gains/losses, historical data, and portfolio allocation.
- **Secure User Authentication:** Implements robust login, registration, and user profile management.

---

## ⚙️ Getting Started (Local Setup)

To run this project locally, ensure you have the necessary prerequisites installed and follow these steps.

### Prerequisites

- Node.js (v18+)
- **Docker** (Highly recommended for easy database setup)

### 1. Initial Setup and Configuration

```bash
# Clone the repository
git clone [https://github.com/MLF-tech/MLF-Monitoring-Live-Finance.git](https://github.com/MLF-tech/MLF-Monitoring-Live-Finance.git)
cd MLF-Monitoring-Live-Finance

# Setup the environment file for secrets
cd server
touch .env
# Add your key: FINANCIAL_API_KEY=your_actual_key_here

---

### 2. Backend Start (`server/`)
# Tutte le configurazioni (package.json, tsconfig.json) sono già presenti.
# Devi solo installare e partire:
cd server
npm install
npm run dev

### 3. Frontend Start (`client/`)
cd ../client
npm install
npm run dev

---

## 📘 Technical Glossary & Documentation
To ensure a deep understanding of the stack and architectural choices, every step of the initialization and every tool used is documented in our internal glossary.

👉 **[View the Technical Glossary](./GLOSSARY.md)**

---

📞 Contact & Licensing
Developed by Maria-Laura Fagioli | (https://www.linkedin.com/in/marialaurafagioli/)

This project is licensed under the MIT License - see the LICENSE file for details.
```
