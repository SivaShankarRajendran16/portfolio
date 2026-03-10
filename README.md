# Siva Shankar Rajendran — F1 Portfolio

React + Tailwind CSS portfolio. Built with Vite.

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Then open → http://localhost:5173

## 📦 Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

## 📁 File Structure

```
siva-portfolio/
├── index.html                  ← HTML entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                ← React entry
    ├── App.jsx                 ← Root component
    ├── index.css               ← Tailwind + global styles
    ├── data/
    │   └── resumeData.js       ← All content (edit this to update info)
    ├── hooks/
    │   ├── useNavTo.js         ← Smooth scroll hook
    │   └── useScrollReveal.js  ← Intersection observer reveal
    ├── components/
    │   ├── Cursor.jsx          ← Custom red cursor
    │   ├── Loader.jsx          ← F1 lights-out loader
    │   ├── Navbar.jsx          ← Fixed nav with smooth scroll
    │   ├── PlaneCanvas.jsx     ← Canvas plane animation
    │   ├── Ticker.jsx          ← Red scrolling ticker bar
    │   └── Telemetry.jsx       ← Fixed bottom telemetry bar
    └── pages/
        ├── Hero.jsx            ← Landing section
        ├── Experience.jsx      ← Work experience + education
        ├── Skills.jsx          ← Tech stack with bars
        ├── Projects.jsx        ← 4 featured projects
        ├── Certifications.jsx  ← Certs & achievements
        └── Contact.jsx         ← Contact + links
```

## ✏️ Editing Your Content

All personal info, skills, projects etc. live in one file:

```
src/data/resumeData.js
```

Just edit that file and the whole site updates automatically.

## 🛠 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- Vanilla Canvas API for planes
- IntersectionObserver for scroll reveals
- No other runtime dependencies
