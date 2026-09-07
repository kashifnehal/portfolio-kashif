# Reference Responsive Specification

Third-pass browser inspection on 2026-09-07. Requested viewport dimensions were observed by the integrated browser at 0.8x CSS dimensions with DPR 1.25.

## Measured comparison

| Requested | Observed CSS viewport | Header gutter |               Hero h1 |         Hero h2 | Intro padding-top | Cases grid                                 | Cases image sample | Footer margin-top |
| --------- | --------------------- | ------------: | --------------------: | --------------: | ----------------: | ------------------------------------------ | ------------------ | ----------------: |
| 1440x900  | 1152x720              |          28px |   207.36px / 207.36px |   100px / 100px |             300px | 1096px wide, 2-column irregular grid       | 548x207px          |             350px |
| 768x1024  | 614x819               |          28px |         175px / 175px |     88px / 88px |             200px | 558px wide, tablet grid                    | 558x233px          |             200px |
| 390x844   | 312x675               |          20px | 114.784px / 114.784px | 70.2px / 70.2px |             120px | 272px wide, single visible column sequence | 272x195px          |             150px |

The 1280x800 and 1024x768 requested settings were previously observed as 1024x640 and 819x614 CSS viewports. The earlier page-architecture measurements remain valid for those runs.

## Layout changes

- Desktop uses an irregular two-column cases grid with representative 548px cells and a 28px inter-column gap.
- Tablet retains the 28px gutter and grid structure but reduces display type and section padding.
- Mobile uses 20px outer gutters for the fixed header and cases grid, with a single visible project sequence of 272px-wide cells. Several desktop-positioned grid cells measure 0x0, indicating hidden or collapsed alternate layout cells rather than a simple scaled desktop grid.
- The header remains fixed and 55px high across inspected sizes.
- The hero remains a viewport-height area, but mobile hides `.main-bg` (`display:none` under 480px) while the hero typography remains visible.
- Intro, awards, and footer spacing contracts at smaller widths: intro top padding 300px -> 200px -> 120px; footer top margin 350px -> 200px -> 150px.

## Typography changes

- Display sizes are 207.36px desktop, 175px tablet, and 114.784px mobile with matching line-heights.
- Supporting heading sizes are 100px desktop, 88px tablet, and 70.2px mobile with matching line-heights.
- The same Tusker Grotesk family remains computed on inspected headings; no alternate family was observed at mobile.

## Interaction changes

- Desktop hover could not be isolated reliably. Mobile has no reliable hover substitute established; touch/click behavior should therefore be treated as the primary project interaction for an original implementation.
- The awards marquee changes from 5s linear desktop to 10s linear below 576px, as established in the second pass.
- Exact mobile changes to project-open transitions, WebGL, footer/parallax, and line wipes are `Not yet verified`.

## Image behavior

- Project image containers remain cover-like and preserve a responsive aspect ratio: approximately 548x207 desktop, 558x233 tablet, and 272x195 mobile in sampled states.
- Case image loading uses lazy-loaded WebP assets. On mobile, some hidden alternate grid cells have zero dimensions; only visible sequence cells should participate in layout and reveal logic.
- The desktop hero uses a cover-like image crop. The dedicated hero background layer is hidden below 480px, so mobile must use a separate visual treatment or no background image.

## Unknowns

Exact breakpoint thresholds beyond the observed CSS rules, full tablet navigation changes, mobile project hover-to-touch behavior, WebGL mobile rendering, and exact image source/crop choices are `Not yet verified`.
