
# React + TypeScript + Vite Boilerplate

This boilerplate provides a minimal setup for developing React applications with TypeScript, Vite, and custom styling/presets. It includes a basic configuration for fast builds, automatic refresh, and ESLint setup to help maintain code quality.

## Features:
- **React + TypeScript**: For a modern, type-safe React development experience.
- **Vite**: Fast build tool with hot module replacement (HMR) for a smooth developer experience.
- **Mystaline Libraries**: Integration with custom `mysta-lib` and `mysta-presets` for UI components and themes.
- **TailwindCSS**: Utility-first CSS framework for rapid styling.
- **ESLint**: Code linting with type-aware checks and React-specific rules.

---

## Setup and Installation

### Prerequisites:
- Node.js and npm (or pnpm) installed on your machine.

### Install dependencies:
```bash
pnpm install
```

This will install all the necessary dependencies, including React, TypeScript, Vite, TailwindCSS, and custom libraries like `mysta-lib` and `mysta-presets`.

---

## File Structure

- **`index.html`**: The entry HTML file where the root element (`<div id="root"></div>`) is located.
- **`src/main.tsx`**: The main entry file where React is bootstrapped. It includes global styles and configuration for the MystaLibProvider with the `raijin` preset.
- **`src/App.tsx`**: The main application component that you can start developing your app in.
- **`assets/css/main.css`**: Global styles.
- **`mysta-lib/style.css`**: Styles from the `mysta-lib` library.
- **`mysta-presets/raijin/style.css`**: The style for the `raijin` preset from `mysta-presets`.

---

## Configuration

### Vite Configuration
- **Vite** is set up with the `@vitejs/plugin-react-swc` plugin for fast React builds using SWC.
- **Path Aliases**:
  - `@`: Points to the `src` directory.
  - `mysta-lib`: Points to the `node_modules/@mystaline/mysta-lib`.
  - `mysta-presets`: Points to the `node_modules/@mystaline/mysta-presets`.

### TypeScript Configuration
- **Strict Mode**: TypeScript is configured with strict type checking enabled.
- **JSX Support**: Set to `react-jsx` to support JSX without needing to import React explicitly.
- **Path Aliases**: The `paths` option in `tsconfig.json` ensures that aliases like `@` for `src` work seamlessly across the project.

### ESLint Configuration
- Type-aware linting rules are enabled for TypeScript, along with React-specific linting rules.
- Ensure all TypeScript files (`.ts`, `.tsx`) are properly linted.

---

## Scripts

- **Development**: Start the Vite development server.
  ```bash
  pnpm dev
  ```
  The app will be available at [http://localhost:9080](http://localhost:9080).

- **Build**: Build the application for production.
  ```bash
  pnpm build
  ```

- **Lint**: Lint the project with ESLint.
  ```bash
  pnpm lint
  ```

- **Preview**: Preview the production build locally.
  ```bash
  pnpm preview
  ```

- **Update Mysta Libraries**: Update `mysta-lib` and `mysta-presets`.
  ```bash
  pnpm up:mysta
  ```

---

## Global Styles and Presets

- **Mystaline Theme**: The `MystaLibProvider` is used to provide configuration options like theme presets (`raijin`) to the application. The `raijin` preset is a vibrant, bold color scheme suitable for futuristic designs.
  
- **TailwindCSS**: TailwindCSS is set up for styling your components with utility classes. You can add custom styles in `main.css`.

---

## Notes

- **Fast Refresh**: SWC-based fast refresh is enabled for fast development cycles.
- **Source Maps**: Source maps are generated for easier debugging in development mode.

---

Feel free to customize the `App.tsx` file to start building your React application with this boilerplate!
