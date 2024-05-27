# Todo App with TypeScript, React, Zustand, MUI, SWR(added to have better data fetching), and Jest

This repository contains a Todo application built with modern web development technologies including TypeScript, React, Zustand, MUI (Material-UI), SWR, and Jest. This README provides a comprehensive guide to setting up, running, and understanding the project.


| Tool        | Purpose                                           |
|-------------|---------------------------------------------------|
| React       | A JavaScript library for building user interfaces |
| Zustand     | Minimalist state management                       |
| TypeScript  | Static typing for JavaScript                      |
| MUI         | Comprehensive UI component library                |
| SWR         | Data fetching and caching                         |
| Jest        | JavaScript testing framework                      |

## Features

:white_check_mark: Simple and intuitive state management with Zustand

:white_check_mark: Modern UI components with MUI

:white_check_mark: Type-safe development with TypeScript

:white_check_mark: Data fetching with SWR

:white_check_mark: Local storage integration for persistence

:white_check_mark: Comprehensive testing setup with Jest and React Testing Library

## Required Versions

| Tool       | Version    |
|------------|------------|
| NodeJS     | >=16       |
| TypeScript | >=4.9.4    |

## Getting Started

### Clone the repository

```bash
git clone https://github.com/soniah770/frontend-candidate-challenge.git
cd frontend-candidate-challenge
```

### Installing Dependencies

```bash
npm install
```

### Running Locally

To run the project locally, simply execute:

```bash
npm start
```

## Scripts

| Command       | Description                                      |
|---------------|--------------------------------------------------|
| `dev`         | Starts the development server                    |
| `build`       | Builds the application for production            |
| `lint`        | Lints the TypeScript files using ESLint          |
| `lint:fix`    | Fixes linting issues in TypeScript files         |
| `format`      | Formats code using Prettier                      |
| `test`        | Runs tests using Jest                            |
| `prepare`     | Sets up Husky for git hooks in a production environment |

## Project Structure

The project is organized into the following directories:

```plaintext
.github
.husky
.vscode
build
coverage
node_modules
public
src
  ├── components
  ├── store
  ├── styles
  ├── tests
  ├── types
  ├── App.tsx
  ├── index.tsx
  ├── react-app-env.d.ts
  ├── setupTests.ts
.eslintrc.js
.gitignore
.prettierignore
.prettierrc
jest.config.ts
package-lock.json
package.json
README.md
```

### Description of Directories and Files

- **.github**: GitHub-specific configuration files and workflows.
- **.husky**: Husky configuration for Git hooks.
- **.vscode**: Visual Studio Code specific settings and extensions.
- **build**: Build output directory.
- **coverage**: Test coverage reports.
- **node_modules**: Directory for installed npm packages.
- **public**: Static assets and the main HTML file.
- **src**: Main source code of the application.
  - **components**: Reusable React components.
  - **store**: Zustand stores for state management.
  - **styles**: SASS files for styling the application.
  - **tests**: Unit and integration tests.
  - **types**: TypeScript type definitions.
  - **App.tsx**: Main App component.
  - **index.tsx**: Entry point of the application.
  - **react-app-env.d.ts**: TypeScript environment definitions.
  - **setupTests.ts**: Setup file for Jest tests.
- **.eslintrc.js**: ESLint configuration.
- **.gitignore**: Git ignore file.
- **.prettierignore**: Prettier ignore file.
- **.prettierrc**: Prettier configuration.
- **jest.config.ts**: Jest configuration.
- **package-lock.json**: Lockfile for npm dependencies.
- **package.json**: Project configuration and dependencies.
- **README.md**: Project documentation.

## Technology Selection and Justification

### Zustand for State Management

Zustand was chosen for its simplicity and performance benefits over other state management solutions such as Redux and Context API. It provides a straightforward API that integrates seamlessly with React and avoids the boilerplate code required by Redux.

### MUI for UI Components

MUI (Material-UI) was selected for its comprehensive set of pre-styled components that follow Material Design guidelines, ensuring a consistent and professional look across the application.

### SASS for Styling

SASS was used alongside MUI to handle more styling requirements and maintain consistency across the project. 

### Fetching Data Using SWR

SWR (stale-while-revalidate) was used for data fetching to leverage its efficient caching and revalidation capabilities, providing a smoother data fetching experience. The JSONPlaceholder API was used to fetch initial tasks, providing a realistic scenario for handling asynchronous data fetching in React.

### Local Storage Integration

Local storage was integrated to persist theme settings across sessions, enhancing the user experience by retaining user preferences.
