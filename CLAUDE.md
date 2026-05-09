# Divine Dialogue — Website

Marketing/landing site for the Divine Dialogue app. Built with **Vite + React 18**, inline styles only (no CSS framework), React Router v6.

Dev server: `npm run dev` → http://localhost:5173  
Build: `npm run build`

---

## Architecture

### Global state — `src/context/AppContext.jsx`
- `religionId`: active tradition (`islam` | `hinduism` | `sikhism` | `christianity`) — drives accent color, glyphs, quotes, chat transcripts across the whole page
- `paletteId`: color theme (`bone` | `cream` | `night`) — default `bone`; palette switcher was intentionally removed from the nav but logic stays in context
- `theme` object: `{ bg, fg, surface, line, muted, faint, isDark }`
- `accent`: religion-specific hex color

### Data — `src/data/religions.jsx`
- `PALETTES`: 3 color themes
- `RELIGIONS`: per-religion config (name, accent, accentSoft, book, verse, cite, Glyph SVG component)
- `RELIGIONS_LIST`: array form
- `FONTS`: `{ display, ui, mono }` — Cormorant Garamond / system-ui / JetBrains Mono

### Routing — `src/App.jsx`
| Path | Component |
|------|-----------|
| `/` | `pages/home/HomePage.jsx` |
| `/about` | `pages/AboutPage.jsx` |
| `/how-it-works` | `pages/HowItWorksPage.jsx` |

---

## Component map

```
src/
├── components/
│   ├── SiteNav.jsx          — sticky nav; religion glyph switcher; NO palette switcher (removed)
│   ├── SiteFooter.jsx       — always-dark hardcoded (#0f0c09); not theme-dependent
│   ├── SectionLabel.jsx     — short line + mono uppercase label
│   ├── Reveal.jsx           — IntersectionObserver fade-in (opacity 0→1, translateY 24→0, 900ms)
│   ├── VerseTicker.jsx      — scrolling verse marquee (CSS dd-ticker-track animation)
│   ├── FinalCTA.jsx         — "Begin the dialogue" download section
│   └── ios/
│       ├── IOSDevice.jsx    — 320×693 phone frame + dynamic island + home indicator
│       └── screens/
│           ├── HomeScreenA.jsx   — "Calm composer" (greeting + suggestion chips + verse footer)
│           ├── HomeScreenB.jsx   — "Conversation start" (mandala + salutation + mood picker)
│           └── HomeScreenC.jsx   — "Open page" (large salutation + composer card)
│
├── pages/
│   ├── home/
│   │   ├── HomePage.jsx         — orchestrates all home sections
│   │   ├── Hero.jsx             — 2-col: headline+whisper input LEFT, two phone mockups RIGHT
│   │   ├── Manifesto.jsx        — 4 "We believe..." statements
│   │   ├── FourTraditions.jsx   — 4 clickable tradition cards; click re-skins entire page
│   │   ├── HowItWorksSection.jsx — 3 steps + IOSDevice phone mock
│   │   ├── ChatDemo.jsx         — always-dark section (#0f0c09); religion-specific dialogue
│   │   └── Team.jsx             — 3 founder cards
│   ├── AboutPage.jsx
│   └── HowItWorksPage.jsx
```

---

## Design decisions

- **No CSS framework** — all inline styles using `style={{}}`. Keep it this way.
- **Grain texture** — `#root::after` in `index.html` with SVG `feTurbulence`, opacity 0.032.
- **Dark sections** — `ChatDemo` and `SiteFooter` use hardcoded dark palette (`#0f0c09`), not `theme.*`. Intentional — always dark regardless of active theme.
- **Palette switcher** — removed from `SiteNav` per design decision; logic still exists in `AppContext` if needed later.
- **Section padding** — 120px vertical padding (was 160px, reduced for tighter feel).
- **Reveal animations** — elements start at `opacity: 0`. In Playwright headless they appear blank when screenshot is taken; this is a GPU compositing artifact — renders correctly in real browsers.
- **Religion accent** — used for nav active state, CTA buttons, headline accent word, card borders, glyph colors. Change `RELIGIONS[id].accent` to update all at once.

---

## Common tasks

**Add a new tradition:**
1. Add glyph SVG component in `src/data/religions.jsx`
2. Add entry to `RELIGIONS` object
3. Add transcript to `ChatDemo.jsx` `TRANSCRIPTS`
4. Add entry to `FourTraditions.jsx` `TRADITION_LIST`

**Change hero phone screens:**
Edit `src/pages/home/Hero.jsx` — primary phone uses `HomeScreenB`, secondary uses `HomeScreenA`. Swap for `HomeScreenC` if needed.

**Add a new page:**
Add route in `src/App.jsx`, create file in `src/pages/`, wrap sections in `<SiteNav>` + `<SiteFooter>`.

**Change fonts:**
Update `FONTS` in `src/data/religions.jsx` and the Google Fonts `<link>` in `index.html`.
