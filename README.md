# Swagarage React — Modular Structure

The single-page website has been split into independent React components without changing the visual design or existing interactions.

## Structure

```text
src/
├── App.jsx
├── main.jsx
├── styles.css
└── components/
    ├── data.js
    ├── Logo.jsx
    ├── Header.jsx
    ├── Hero.jsx
    ├── Intro.jsx
    ├── Services.jsx
    ├── Statement.jsx
    ├── Process.jsx
    ├── About.jsx
    ├── FAQ.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

### What is separated

- `Header.jsx` — announcement bar, navigation and mobile menu
- `Hero.jsx` — hero section
- `Intro.jsx` — Swagarage intro/value section
- `Services.jsx` — services/cards
- `Statement.jsx` — dark statement/CTA section
- `Process.jsx` — five-step process
- `About.jsx` — about section
- `FAQ.jsx` — FAQ accordion state and UI
- `Contact.jsx` — contact form state and mailto submission
- `Footer.jsx` — footer/social links
- `Logo.jsx` — reusable brand logo
- `data.js` — services, process steps and FAQ content
- `App.jsx` — page composition only
- `styles.css` — shared styling

## Run

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
```

No extra dependencies were added.
