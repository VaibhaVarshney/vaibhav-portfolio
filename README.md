# Vaibhav Varshney — Portfolio

This is a React + Vite + Tailwind portfolio template inspired by aditii2112.github.io and customized for Vaibhav Varshney.

## Quick start

1. Install dependencies:
```bash
npm install
```

2. Run dev server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a repo named `vaibhav-portfolio` under your GitHub account `VaibhaVarshney`.
2. Push this project to the `main` branch.
3. The repository already includes a GitHub Actions workflow `.github/workflows/deploy.yml` that will build the site and publish the `dist` folder to GitHub Pages after each push to `main`.
4. Make sure in your repository settings -> Pages the branch `gh-pages` (or the action) is set (the action used peaceiris/actions-gh-pages which will create the gh-pages branch automatically).

If you prefer a manual `gh-pages` deploy, you can run:
```bash
npm run build
npm run deploy
```

Replace the homepage URL in `package.json` if you want a different repo name.

