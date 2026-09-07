# Reference Design System

Values below are measured from the loaded page where stated. Values marked `inferred` are reconstruction guidance, not exact source values.

## Color and surface

- Primary text: `rgb(245, 238, 230)` (`#f5eee6`), measured from body and headings.
- Page theme/background: `#000` is present in the stylesheet and black was observed as the base painted theme; body background can compute transparent because background layers are separate.
- Secondary dark surface: `rgb(19, 19, 19)` (`#131313`), found in computed color usage.
- Muted foreground: `rgba(245, 238, 230, 0.5)`, found in computed color usage.
- White utility/accent: `#fff`, found in computed styles, especially footer/link utility content.
- Overlay: `#f3dbc7` (`rgb(243, 219, 199)`), used by the case-image color blend overlay.
- Hover: simple links transition foreground opacity from 1 to 0.4; a separate hover color was not found.
- Active/focus: browser focus outline observed as orange `rgb(229, 151, 0)` on header links; active design token is `Not yet verified`.
- Header/footer imagery: photographic/classical-art imagery with darkening/overlay treatment visible in captures. Exact blend mode and overlay opacity are `Not yet verified`.
- Borders: thin light rules and outlined pill CTA buttons are visible. Exact border width is `Not yet verified`.
- Corner radius: CTA outlines appear pill-shaped; exact radius is `Not yet verified`.
- Box shadows: no box shadow was measured on the main sections or grid cells.

## Typography

Loaded custom font families, confirmed with `document.fonts` and stylesheet `@font-face` rules:

| Role                     | Family         | Weight observed                                  |
| ------------------------ | -------------- | ------------------------------------------------ |
| Display/headings         | Tusker Grotesk | 500 in computed headings; stylesheet face is 600 |
| Body/UI                  | Neue Montreal  | 500 stylesheet face                              |
| Serif/ornamental accents | Migra          | 600 stylesheet face                              |
| Decorative/alternate     | Maelstrom      | bold stylesheet face                             |

At effective 1152x720 desktop:

- Hero `h1`: 207.36 px, 207.36 px line-height, weight 500, uppercase.
- Hero supporting `h2`: 100 px, 100 px line-height, weight 500, uppercase.
- Responsive display sizes: hero `h1` measured 175px at effective 614x819 tablet and 114.784px at effective 312x675 mobile; supporting `h2` measured 88px and 70.2px respectively.
- Base computed body size: 16 px; body line-height: 1.
- Letter spacing was `normal` for inspected heading elements; exact tracking of every text class is `Not yet verified`.

## Layout

- Main horizontal gutter at effective desktop width: 28 px; cases grid width was 1,096 px inside a 1,152 px viewport.
- Effective mobile gutter: 20 px for the fixed header and visible cases grid; tablet retained 28 px.
- Cases grid: 15 cells, irregular multi-row layout using classes such as `grid__cell-c1-r1`, `grid__cell-c2-r1`, and `grid__cell-c3-r4`.
- At effective desktop width, representative grid cells were 548 px wide with approximately 28 px between columns.
- Hero is approximately 100vh and the header is fixed, 55 px high.
- Exact max-width, row-gap, breakpoint values, and padding for every region are `Not yet verified`.
- Measured section padding/margins: intro top padding 300px desktop, 200px tablet, 120px mobile; awards padding 300px/200px/200px top and 195.84px/70px/70px bottom; footer top margin 350px/200px/150px.

## Imagery and effects

- Hero image fills the desktop/tablet viewport and is visibly cropped to cover. The inspected source was 1080x1014 WebP and rendered about 1267x1190 at effective desktop CSS; below 480px the `.main-bg` layer is hidden.
- Case images use lazy-loaded `<img>` elements with `object-fit`/cover-like behavior inferred from `.grid__bg-img` naming and the visible crops; exact object-position varies and is `Not yet verified`.
- A `canvas.webgl` was measured at 647x986 intrinsic pixels during inspection, indicating a WebGL visual layer. Its shader/material implementation is documented as unknown in `technology.md`.
- Decorative star/symbol elements and marquee text contribute to the visual hierarchy.

Font source/license status and open alternatives are documented in `assets-required.md`; the reference font files must not be redistributed without permission.

## Casing and hierarchy

Display and section titles are uppercase. Body copy is uppercase in the hero and many section labels. Navigation and small utility labels use lowercase in the header. The visual hierarchy is display title first, short statement/CTA second, then compact metadata and repeated lists.
