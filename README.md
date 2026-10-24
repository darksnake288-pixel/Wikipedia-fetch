# Live Demo : [click Here](https://wikipedia-fetch.vercel.app/)
# 🌐 Wiki Fetcher (Wikipedia Search App)

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive, and lightweight Wikipedia article search application built using **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**. It interacts directly with the Wikipedia OpenSearch API to fetch and present relevant articles, descriptions, and direct reading links with zero friction.

---

## ✨ Features

- 🔍 **Real-time Wikipedia Search**: Query Wikipedia's database instantly using the official OpenSearch API.
- ⚡ **Lightning Fast**: Powered by Vite and optimized React 19 client-side rendering.
- 🎨 **Clean & Modern UI**: Built with Tailwind CSS v4 featuring sleek shadows, rounded cards, and smooth hover/active animations.
- ⌨️ **Keyboard Friendly**: Trigger searches with either the "Search" button or by simply hitting `Enter`.
- 🛡️ **Type-Safe Architecture**: Fully typed using TypeScript with zero build warnings and strict linting.
- 📱 **Responsive Design**: Clean and centered layout optimized for both desktop and mobile viewports.
- ⚠️ **Error & State Handling**: Interactive loading states and user-friendly error alerts.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Core frontend UI library |
| **TypeScript** | Static typing and interface contracts |
| **Vite 8** | Next-generation frontend build tooling and HMR |
| **Tailwind CSS 4** | Utility-first styling with `@tailwindcss/vite` |
| **Wikipedia OpenSearch API** | Public REST endpoint for retrieving article suggestions |

---

## 📁 Project Structure

```text
my-project/
├── public/                 # Static assets & icons
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/             # Project assets
│   ├── App.tsx             # Core application & Wikipedia fetch logic
│   ├── index.css           # Global stylesheet with Tailwind CSS v4
│   └── main.tsx            # React application entry point
├── index.html              # HTML shell
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # Application-level TS settings
└── vite.config.ts          # Vite configuration with React & Tailwind plugins
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (or `yarn` / `pnpm` / `bun`)

### Installation

1. Clone or navigate into the repository:
   ```bash
   cd Wikipidia_Clone/my-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```text
   http://localhost:5173
   ```

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript and builds the application for production to `dist/`. |
| `npm run preview` | Locally preview the production build. |
| `npm run lint` | Runs ESLint to check for code issues. |

---

## 🌐 API Details

This project uses the official **Wikipedia OpenSearch API**:

```http
GET https://en.wikipedia.org/w/api.php?action=opensearch&search={searchTerm}&format=json&origin=*
```

### Response Format
The API responds with a 4-element JSON array:
```json
[
  "query term",
  ["Article Title 1", "Article Title 2", ...],
  ["Description 1", "Description 2", ...],
  ["https://en.wikipedia.org/wiki/...", ...]
]
```
The application parses these arrays and formats them into strongly-typed `Article` objects for display.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork the repository and submit a pull request.

---

## 📝 License

This project is licensed under the MIT License - feel free to use and modify it as you see fit.
