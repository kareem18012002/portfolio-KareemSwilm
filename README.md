# Kareem Ezzat — .NET Backend Portfolio

An English, responsive portfolio built with standalone Angular components, strict TypeScript, CSS, zoneless change detection, and static prerendering with hydration. CV content is centralized in `src/app/cv-data.ts`; the supplied two-page PDF is embedded exactly in `src/app/cv-pdf-base64.ts` so the download works on static hosts without browser storage or a separate asset copy.

## Run locally

Requires Node.js `^22.22.3`, `^24.15.0`, or `^26.0.0` for Angular 22.3.0.

```bash
npm install
npm start
npm run build
```

Open `http://localhost:4200`. `npm start` runs `ng serve`; the production build is statically prerendered in `dist/kareem-portfolio/browser`.

## Project structure

```text
.
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── index.html
    ├── styles.css
    ├── main.ts
    ├── main.server.ts
    └── app/
        ├── app.component.ts
        ├── app.config.ts
        ├── app.config.server.ts
        ├── app.routes.ts
        ├── app.routes.server.ts
        ├── cv-data.ts
        ├── cv-pdf-base64.ts
        ├── cv-download.service.ts
        ├── seo.service.ts
        ├── theme.service.ts
        ├── sections/
        │   ├── hero.component.ts
        │   ├── about.component.ts
        │   ├── experience.component.ts
        │   ├── projects.component.ts
        │   ├── skills.component.ts
        │   ├── education.component.ts
        │   ├── contact.component.ts
        │   └── footer.component.ts
        └── shared/
            ├── navbar.component.ts
            └── scroll.service.ts
```

## Deploy

- **Netlify:** connect the repository, use `npm run build` as the build command, and `dist/kareem-portfolio/browser` as the publish directory.
- **Vercel:** import the repository, use `npm run build`, and set the output directory to `dist/kareem-portfolio/browser`.
- **GitHub Pages:** `.github/workflows/deploy.yml` builds the site on pushes to `main` and publishes `dist/kareem-portfolio/browser` to the `gh-pages` branch. The repository's Pages source should be set to **Deploy from a branch → `gh-pages` → `/ (root)**. For another repository, change the workflow's `--base-href` to `"/<repository-name>/"`. Use `/` for a custom domain or user-site repository.

The CV currently lists a GitHub link for ElectroMart. The Course Management API and graduation project do not have project links in the supplied CV, so the portfolio marks those links as unlisted rather than inventing destinations.
