# Crumb Culture — Bakery Landing Page

A responsive, single-page landing site for **Crumb Culture**, a fictional neighborhood bakery in Portland, Oregon.

## Features

- **Hero section** with full-bleed background image, tagline, and dual CTAs
- **About section** telling the bakery's story with values grid
- **Menu section** with 6 signature baked goods (image, description, price)
- **Location & Contact** with embedded Google Map, address, hours, phone, email, and a validated contact form
- **Footer** with social links and dynamic copyright year
- **Responsive** across mobile, tablet, and desktop with a working mobile menu toggle
- **Accessible** — semantic HTML5, skip link, ARIA labels, focus-visible outlines, `prefers-reduced-motion` support
- **SEO-friendly** — meta description, Open Graph tags, proper heading hierarchy
- **Fast** — Tailwind via CDN, lazy-loaded images, no build step

## Tech Stack

- HTML5
- Tailwind CSS (via CDN)
- Custom CSS (`css/style.css`)
- Vanilla JavaScript (`js/script.js`)
- Google Fonts (Playfair Display + Inter)
- Unsplash images

## Project Structure

```
.
├── index.html        # Main landing page
├── css/
│   └── style.css     # Custom design tokens and component styles
├── js/
│   └── script.js     # Mobile menu + form validation
└── README.md
```

## Local Preview

No build step required. Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Static site — deployable to Vercel, Netlify, GitHub Pages, or any static host with no build configuration.
