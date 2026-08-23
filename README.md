# Bianca Benson

Source for [biancabenson.com](https://biancabenson.com), a lightweight personal website for Bianca Benson, a digital creative in the Netherlands working across graphic and typographic design, web development, and digital communication.

## Approach

The site is intentionally built with semantic HTML, CSS, and a small amount of vanilla JavaScript. Its visual direction is typography-led, with a scroll-based introduction and an animated aurora background.

This project does not use Vue, React, or another framework by design. The site is small and predominantly static; native browser features already meet its needs. Adding a framework would introduce dependencies, runtime overhead, build tooling, and maintenance without a clear user or developer benefit.

The implementation reflects a design-led practice supported by full-stack web development training: choose the smallest, clearest technology that serves the experience.

## Technology

- Semantic HTML5
- Modern CSS, including scroll snap, responsive viewport units, and reduced-motion support
- Vanilla JavaScript for active-section colour changes and mouse-wheel navigation
- Locally hosted production typeface, not distributed with this repository
- No framework or build step required

## Accessibility and performance

- Native landmarks, headings, links, and buttons where appropriate
- Visible keyboard focus treatment and touch-friendly contact links
- `prefers-reduced-motion` support for the animated background
- Responsive layout using fluid sizing and dynamic viewport-height fallbacks
- `font-display: swap` for the locally hosted production typeface
- Minimal JavaScript and no third-party runtime scripts

## Project structure

```text
├── index.html          # Homepage
├── 404.html            # Fallback page
├── css/
│   ├── normalize.css   # Browser baseline
│   └── style.css       # Site styles and animation
├── js/
│   └── pages.js        # Homepage interaction
├── favicon.* / icon.png
├── site.webmanifest
└── robots.txt
```

## Run locally

No installation or build is required. Serve the project folder with any static web server, for example:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

The production site uses a locally hosted typeface whose files are intentionally excluded from this repository. Local previews will use the CSS fallback font unless you provide an appropriately licensed replacement.

## Deployment

The production site is deployed as static files via FTP. No compilation or deployment pipeline is required.

## License

© Bianca Benson. Unless otherwise noted, the original website design, source code, written content, and assets in this repository are shared for portfolio review only. They may not be reused, redistributed, or used commercially without prior written permission.

Third-party components retain their respective licences. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Future improvements

- Create a bespoke social-preview image for richer link sharing.
- Periodically review browser support and accessibility at narrow viewport widths and high zoom levels.
- Add lightweight automated HTML and accessibility checks if the site grows beyond its current scope.
