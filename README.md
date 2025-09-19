# React + Vite + Tailwind CSS + Shadcn/UI Template

This is a template for building React applications with Vite, Tailwind CSS, and Shadcn/UI. It provides a solid starting point for your future projects, with a clean and scalable folder structure, a theme provider for light and dark modes, and a few sample components to get you started.

## Tech Stack

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Shadcn/UI:** A collection of beautifully designed, accessible, and customizable components for React.

## Getting Started

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2.  Install the dependencies:

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
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── tsconfig.node.json
```

-   `src/assets`: Static assets such as images, fonts, etc.
-   `src/components/ui`: Shadcn/UI components.
-   `src/components/theme`: Theme-related components, such as the theme provider and theme toggle button.
-   `src/lib`: Utility functions.

## Learn More

To learn more about the technologies used in this template, check out the following resources:

-   [React](https://react.dev/)
-   [Vite](https://vitejs.dev/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Shadcn/UI](https://ui.shadcn.com/)