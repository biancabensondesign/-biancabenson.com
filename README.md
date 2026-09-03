# Bianca Benson

Source for [biancabenson.com](https://biancabenson.com), a lightweight personal website for Bianca Benson, a digital creative in the Netherlands working across graphic and typographic design, web development, and digital communication.

## Approach

The site is intentionally built with semantic HTML and CSS, and no JavaScript. Its visual direction is typography-led, with an animated aurora background and native HTML disclosure widgets for progressive detail.

This project does not use Vue, React, or another framework by design. The site is small and predominantly static; native browser features already meet its needs. Adding a framework would introduce dependencies, runtime overhead, build tooling, and maintenance without a clear user or developer benefit.

The implementation reflects a design-led practice supported by full-stack web development training: choose the smallest, clearest technology that serves the experience.

## Technology

- Semantic HTML5, including native `<details>` disclosure widgets for expandable sections
- Modern CSS, including custom properties, `clamp()` fluid type, responsive viewport units, and reduced-motion support
- No JavaScript
- Fraunces (variable) loaded from Google Fonts for display headings, with a system font stack for body text
- Each page is self-contained: its CSS is inlined, with no external stylesheet or script files
- No framework or build step required

## Accessibility and performance

- Native landmarks, headings, links, and disclosure widgets where appropriate
- Visible keyboard focus treatment and touch-friendly controls
- `prefers-reduced-motion` support for the animated background
- Responsive layout using fluid sizing (`clamp()`) and flexible units
- `display=swap` on the web font so text renders immediately in a fallback
- No JavaScript and no third-party runtime scripts

## Project structure

```text
├── index.html            # Homepage / portfolio
├── extra-info.html        # Additional info page (Dutch)
├── extra-info-en.html     # Additional info page (English)
├── 404.html               # Fallback page
├── favicon.ico / favicon.png / icon.png
├── site.webmanifest
└── robots.txt
```

## Run locally

No installation or build is required. Serve the project folder with any static web server, for example:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

Display headings load Fraunces from Google Fonts, so previewing with an internet connection shows the intended typography. Body text uses the system font stack and needs nothing external.

## Deployment

The production site is deployed as static files via FTP. No compilation or deployment pipeline is required.

## License

© Bianca Benson. Unless otherwise noted, the original website design, source code, written content, and assets in this repository are shared for portfolio review only. They may not be reused, redistributed, or used commercially without prior written permission.

Third-party components retain their respective licences. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Future improvements

- Create a bespoke social-preview image for richer link sharing.
- Periodically review browser support and accessibility at narrow viewport widths and high zoom levels.
- Add lightweight automated HTML and accessibility checks if the site grows beyond its current scope.
