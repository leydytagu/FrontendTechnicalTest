# Frontend Technical Test

This repository contains the solution to the [HI Tech Test](https://github.com/Hello-Insight/hi-tech-test). Below, you will find detailed instructions for setting up the project, running it, and understanding the architecture and design patterns used.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Architecture](#project-architecture)
  - [Folder Structure](#folder-structure)
  - [Design Patterns](#design-patterns)
    - [Module Architecture](#module-architecture)
    - [Facade Pattern](#facade-pattern)
- [Styling Approach](#styling-approach)
  - [Atomic Design](#atomic-design)
  - [BEM Methodology](#bem-methodology)
- [GitHub Actions Deployment](#github-actions-deployment)
- [Solution Preview](#solution-preview)
- [Additional Resources](#additional-resources)

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher) or [yarn](https://yarnpkg.com/)
- [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) for managing Node.js versions

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/leydytagu/FrontendTechnicalTest.git
   cd FrontendTechnicalTest
   ```

2. Use the correct Node.js version:
   ```bash
   nvm use
   ```
   If the required Node.js version is not installed, you can install it with:
   ```bash
   nvm install
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:4200`.

---

## Project Architecture

### Folder Structure
The project follows a modular architecture for better scalability and maintainability. Below is the updated folder structure:

```
FrontendTechnicalTest/
├── public/                     # Static assets
├── src/
│   ├── app/                    # Main application module
│   │   ├── pages/              # Application pages
│   │   │   ├── landing/        # Landing page components
│   │   │   │   ├── components/
│   │   │   │   │   ├── accordion-head/
│   │   │   │   │   ├── group-card/
│   │   │   │   │   ├── group-info/
│   │   │   │   │   ├── survey-collection/
│   │   │   │   │   ├── survey-detail/
│   │   │   │   │   └── survey-tags/
│   │   ├── core/               # Core utilities and services
│   │   │   ├── constants/      # Global constants
│   │   │   ├── facades/        # Facade pattern implementations
│   │   │   ├── mappers/        # Data mappers
│   │   │   ├── models/         # TypeScript models/interfaces
│   │   │   ├── services/       # API services
│   │   │   └── utils/          # Utility functions
│   │   │       └── url-builder.ts
│   │   ├── shared/             # Shared components
│   │   │   ├── design-system/  # Design system components
│   │   │   │   ├── atoms/      # Smallest UI components
│   │   │   │   ├── molecules/  # Combinations of atoms
│   │   │   │   └── organisms/  # Complex UI components
│   ├── styles/                 # Global styles
│   │   ├── base/               # Base styles
│   │   │   ├── _global.scss    # Global resets and defaults
│   │   │   ├── _mixins.scss    # SCSS mixins for reuse
│   │   │   ├── _reset.scss     # CSS reset styles
│   │   │   └── _variables.scss # Global SCSS variables
│   │   └── primitives/         # Primitive style definitions
│   │       ├── _breakpoints.scss # Responsive breakpoints
│   │       ├── _colors.scss      # Color variables and themes
│   │       ├── _icons.scss       # Icon-specific styles
│   │       └── _typography.scss  # Typography definitions
└── index.html                  # Entry point
```

### Design Patterns

#### Module Architecture
This approach organizes code by feature or module rather than by type. Each module contains its own components, hooks, and services, ensuring that functionality is encapsulated and reusable.

#### Facade Pattern
The `core/facades/` directory implements the facade pattern to abstract API interactions. This provides a simplified interface for the rest of the application, improving maintainability and testability.

---

## Styling Approach

### Atomic Design
Components are designed following the Atomic Design methodology:
- **Atoms**: Smallest, indivisible elements like buttons or text inputs.
- **Molecules**: Groups of atoms working together, such as a search bar.
- **Organisms**: Larger UI sections built from molecules, like a navigation bar.

### BEM Methodology
CSS is structured using the BEM (Block-Element-Modifier) naming convention. This ensures consistency and clarity:
- **Block**: A standalone entity (e.g., `button`).
- **Element**: A part of a block (e.g., `button__icon`).
- **Modifier**: A variation of a block or element (e.g., `button--primary`).

---

## GitHub Actions Deployment
The project is deployed automatically using GitHub Actions. You can view the deployed application at:

**URL**: [https://leydytagu.github.io/FrontendTechnicalTest/](https://leydytagu.github.io/FrontendTechnicalTest/)

---

## Solution Preview
Here is a screenshot of the application:

<img width="1326" alt="Captura de pantalla 2024-12-18 a la(s) 3 17 51 a m" src="https://github.com/user-attachments/assets/60272cdc-3555-4234-afe3-f2dbbe01f121" />

---

## Additional Resources

### Icons
- Icons are sourced from [Font Awesome](https://fontawesome.com/) and [Material Icons](https://fonts.google.com/icons).

Thank you for the opportunity. I hope this solution meets your expectations and is to your liking
