# Kareem Ezzat — Portfolio (React)

A modern, production-grade portfolio built with React + Vite + CSS Modules.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# Opens at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── images/
│       └── profile.jpg   ← Put your photo here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── globals.css        # CSS variables & base styles
    ├── hooks/
    │   └── useScrollReveal.js # Intersection Observer hook
    ├── data/
    │   └── portfolio.js       # All content — edit here
    └── components/
        ├── Navbar.jsx / .module.css
        ├── Hero.jsx / .module.css
        ├── About.jsx / .module.css
        ├── Skills.jsx / .module.css
        ├── Projects.jsx / .module.css
        ├── Experience.jsx / .module.css
        ├── Education.jsx / .module.css
        ├── Contact.jsx / .module.css
        └── Footer.jsx / .module.css
```

## 📸 Add Your Profile Photo

1. Create folder: `public/images/`
2. Place your photo as: `public/images/profile.jpg`
3. Recommended: 800×800px or larger, square crop

## ✏️ Customizing Content

All text content lives in **`src/data/portfolio.js`** — just edit that file:
- Personal info, bio, social links
- Skills categories and tags
- Project details and metrics
- Experience and education

## 🎨 Design System

Colors and fonts are in `src/styles/globals.css` as CSS variables.
To change accent color: edit `--accent: #4F8EF7;`

## 📦 Tech Stack

- React 19
- Vite 8
- CSS Modules (zero runtime CSS-in-JS)
- JetBrains Mono + Outfit fonts
