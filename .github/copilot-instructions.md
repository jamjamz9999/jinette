# GitHub Copilot Custom Instructions

This repository contains a React-based photography portfolio website built with Vite, Tailwind CSS, and React Router.

## Project Structure

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS 4.1.17
- **Routing**: React Router DOM 6.25.1
- **Deployment**: GitHub Pages

## Coding Standards

### JavaScript/React
- Use functional components with React Hooks
- Use JSX file extensions (`.jsx`) for React components
- Use ES6+ features (arrow functions, destructuring, template literals)
- Use `import` statements for module imports
- Prefer `const` over `let` when values don't change
- Use meaningful variable and function names in camelCase
- Keep components focused and single-purpose

### Component Structure
- Place page components in `./pages/` directory
- Place reusable components in `./components/` directory
- Import components with relative paths
- Export default for main component, named exports for utilities

### Styling
- Use Tailwind CSS utility classes for styling
- Follow existing Tailwind configuration in `tailwind.config.js`
- Custom styles should be added via CSS-in-JS or global CSS files
- Use the defined color palette: primary (#000000), secondary (#ffffff), accent (#0066cc)
- Use custom font families: Playfair Display, Hind, Montserrat, Lora

### File Naming
- Use PascalCase for component files (e.g., `HomePage.jsx`, `AdminPanel.jsx`)
- Use camelCase for utility files (e.g., `constants.js`)
- Use kebab-case for configuration files (e.g., `vite.config.js`)

## Build and Development

### Development
```bash
npm run dev
```
Runs the development server on port 3000 at `http://0.0.0.0:3000`

### Build
```bash
npm run build
```
Creates production build in `dist/` directory

### Preview
```bash
npm run preview
```
Preview the production build locally

### Deploy
```bash
npm run deploy
```
Deploys to GitHub Pages (automatically builds first via `predeploy` script)

## Environment Variables

- `GEMINI_API_KEY`: Required for Gemini API integration (set in `.env.local`)
- Access in code via `process.env.GEMINI_API_KEY` or `process.env.API_KEY`

## Important Conventions

### Assets
- Video files (`.mp4`, `.webm`, `.ogv`) are supported via Vite asset handling
- Font files are included in the repository
- Use the base path `/jinette/` for production builds (configured in `vite.config.js`)

### API Integration
- Gemini API key is injected at build time via Vite's `define` config
- Do not hardcode API keys in source files

### Dependencies
- Check `package.json` before adding new dependencies
- Use `npm install` to add new packages
- Prefer existing dependencies when possible

## Security Guidelines

- Never commit API keys or secrets to the repository
- Use environment variables for sensitive data
- Keep `.env.local` in `.gitignore`
- Validate user input when handling form submissions

## Documentation

- Add comments for complex logic or non-obvious implementations
- Keep comments concise and relevant
- Update README.md when making significant changes
- Document component props when creating reusable components

## Testing

- Currently no test framework is configured
- When adding tests, prefer Jest or Vitest for React testing
- Test critical user flows and component functionality

## Git Workflow

- Work on feature branches
- Use descriptive commit messages
- Keep commits focused and atomic
- Do not commit generated files (e.g., `dist/`, `node_modules/`)

## Special Notes

- The project uses a custom video encoding script (`reencode-video.cjs`)
- Metadata is stored in `metadata.json`
- Constants are centralized in `constants.js`
- The base path is set to `/jinette/` for GitHub Pages deployment
