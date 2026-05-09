# Divine Dialogue Website

Landing page for Divine Dialogue — an interfaith dialogue app connecting seekers with wisdom from Islam, Hinduism, Sikhism, and Christianity.

![Divine Dialogue](https://img.shields.io/badge/React-18.3-blue) ![Vite](https://img.shields.io/badge/Vite-6.0-yellow) ![License-MIT](https://img.shields.io/badge/License-MIT-green)

## Overview

Divine Dialogue is a marketing landing page built with **Vite + React 18** that showcases an interfaith dialogue application. The site features:

- **Multi-tradition support** — Explore Islamic, Hindu, Sikh, and Christian spiritual traditions
- **Interactive UI** — Dynamic theming that changes based on selected tradition
- **Phone mockups** — iOS device demonstrations of the app experience
- **Responsive design** — Works on all screen sizes

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **React 18** — UI framework
- **Vite 6** — Build tool and dev server
- **React Router v6** — Client-side routing
- **No CSS framework** — Custom inline styles for complete design control

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── SiteNav.jsx      # Navigation with tradition switcher
│   ├── SiteFooter.jsx   # Site footer
│   ├── Reveal.jsx      # Scroll-triggered fade-in animations
│   ├── VerseTicker.jsx # Scrolling verse marquee
│   ├── FinalCTA.jsx    # Call-to-action section
│   └── ios/            # iOS device mockups
├── pages/
│   ├── home/           # Landing page sections
│   ├── AboutPage.jsx   # About page
│   └── HowItWorksPage.jsx
├── context/
│   └── AppContext.jsx  # Global state (religion, theme, palette)
└── data/
    └── religions.jsx   # Religion config, colors, glyphs
```

## Features

### Dynamic Theming
The site automatically adapts its color palette based on the selected tradition:
- **Islam** — Deep green accent (#2D5A3D)
- **Hinduism** — Saffron/amber accent (#D4A84B)
- **Sikhism** — Deep blue accent (#1E4D6B)
- **Christianity** — Crimson accent (#8B2942)

### Pages
- `/` — Home page with hero, manifesto, traditions, how it works, team
- `/about` — About the mission and vision
- `/how-it-works` — Detailed explanation of the app

## Design Decisions

- **No CSS framework** — All styling uses inline React styles
- **Grain texture overlay** — Subtle film grain effect for atmosphere
- **Hard-coded dark sections** — Chat demo and footer always use dark theme
- **Reveal animations** — Elements fade in on scroll using IntersectionObserver

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server on http://localhost:5173 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Related Projects

This landing page is part of the Divine Dialogue ecosystem:
- [divine-dialogue-data](https://github.com/ronit450/divine-dialogue) — Religious texts data (Quran, Gita, Guru Granth Sahib, Bible)

## License

MIT License — see LICENSE file for details.