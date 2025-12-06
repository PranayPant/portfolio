# Pranay Pant - Senior Frontend Engineer Portfolio

![Build Status](https://github.com/yourusername/portfolio/actions/workflows/deploy.yml/badge.svg)
![Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/yourusername/your-gist-id/raw/portfolio-coverage.json)
![Tech](https://img.shields.io/badge/tech-React%20%7C%20TypeScript%20%7C%20Tailwind-blue)

A high-performance portfolio application designed to showcase advanced frontend architecture, testing strategies, and responsive UI patterns.

## 🚀 Overview

This project serves as both a portfolio of my work and a demonstration of the skills outlined in my resume, specifically:
- **Clean Architecture**: Modular component design with separation of concerns.
- **Performance**: Optimized asset loading and responsive layouts using Tailwind CSS.
- **Testing**: Integrated unit and component testing suites (Jest + React Testing Library).
- **Modern Stack**: Built with React 18, TypeScript, and Lucide Icons.

## 🛠 Tech Stack

- **Core**: React 18, TypeScript
- **Styling**: Tailwind CSS (Custom configuration with animations)
- **Data Visualization**: Recharts
- **Testing**: Jest, React Testing Library, Mock Service Worker concepts
- **CI/CD Concepts**: Automated quality checks simulation

## 🏗 Project Structure

```bash
├── components/          # Reusable UI components
│   ├── __tests__/       # Component-level tests
│   ├── Layout.tsx       # Main layout wrapper
│   └── ...
├── services/            # API abstraction layer
│   └── __tests__/       # Service unit tests
├── types.ts             # TypeScript definitions
├── constants.ts         # Resume data source of truth
└── App.tsx              # Application entry
```

## 🧪 Testing Strategy

This repository demonstrates a "Testing Trophy" approach:

1.  **Static Analysis**: TypeScript for type safety.
2.  **Unit Tests** (`services/__tests__`): Verifies business logic and API handling.
3.  **Component Tests** (`components/__tests__`): Ensures UI renders correctly based on props and user interaction.

## 🏃‍♂️ Running Locally

1.  Clone the repository
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm start
    ```
4.  Run the test suite:
    ```bash
    npm test
    ```

## 📄 License

© 2025 Pranay Pant. All rights reserved.
