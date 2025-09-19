# React + Vite + Tailwind CSS + Shadcn/UI Template

This is a template for building React applications with Vite, Tailwind CSS, and Shadcn/UI. It provides a solid starting point for your future projects, with a clean and scalable folder structure, a theme provider for light and dark modes, a sample test, and a few sample components to get you started.

## Tech Stack

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Shadcn/UI:** A collection of beautifully designed, accessible, and customizable components for React.
- **Vitest:** A blazing fast unit test framework powered by Vite.
- **React Testing Library:** A simple and complete testing utility for React.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. Use this repository as a template for your new project.
2. Install the dependencies:

    ```bash
    npm install
    ```

### Development

To start the development server, run the following command:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`.

### Build

To build the project for production, run the following command:

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.

### Testing

To run the tests, run the following command:

```bash
npm test
```

## Folder Structure

The folder structure is organized as follows:

```
/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   └── theme/
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── __tests__/
│   │   │   └── HomePage.test.tsx
│   │   └── HomePage.tsx
│   ├── test/
│   │   └── setup.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

- `src/assets`: Static assets such as images, fonts, etc.
- `src/components/ui`: Shadcn/UI components.
- `src/components/theme`: Theme-related components, such as the theme provider and theme toggle button.
- `src/lib`: Utility functions.
- `src/pages`: Page components and their tests.
- `src/test`: Test setup and configuration.

## Learn More

To learn more about the technologies used in this template, check out the following resources:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
