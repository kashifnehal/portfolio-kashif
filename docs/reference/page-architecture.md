# Reference Page Architecture

Source inspected: `https://bepatrickdavid.com/` on 2026-09-07 using browser automation.

## Route and order

The reference is a single route (`/`) using hash navigation. Observed order:

1. Fixed header: identity link, role label, `works`, `about`, `contact`, and a progress-like date/availability display.
2. Hero (`main-bg`/page header): full viewport artwork background, oversized `DESIGNER & DEVELOPER` title, availability marker, introductory statement, and contact CTA.
3. Intro/about (`#intro`): `HELLO. I AM DAVID`, biography/about copy, and a secondary statement.
4. Section title: `SELECTED CASES` and supporting transition copy.
5. Cases (`#cases`): selected case-study grid and a follow-up `SEE OTHER CASES` CTA.
6. Section CTA: repeated/marquee contact interaction.
7. Awards (`#awards`): awards count, awards list, and animated/repeated list content.
8. Featured/skills area: repeated featured-publication/skill marquee content.
9. Footer (`#footer`): contact CTA, social links, site-version links, font credits, and footer artwork/background.

## Measured geometry

At the requested 1440x900 setting, the browser reported CSS viewport 1152x720 (DPR 1.25). After loading, the main document measured approximately 5,891 CSS px:

| Region        |   Top | Height |
| ------------- | ----: | -----: |
| Header        |     0 |     55 |
| Hero viewport |     0 |    720 |
| Intro         |   720 |  1,091 |
| Section title | 1,811 |    340 |
| Cases         | 2,201 |  1,302 |
| CTA title     | 3,502 |     99 |
| Awards        | 3,601 |  1,017 |
| Featured      | 4,546 |    135 |
| Footer        | 5,031 |    855 |

The section heights vary responsively. At effective CSS widths/heights of 1024x640, 819x614, 614x819, and 312x675, total measured content heights were approximately 6,235, 5,978, 6,095, and 4,959 px respectively. These effective dimensions correspond to requested 1280x800, 1024x768, 768x1024, and 390x844 settings.

## Components and generation

- The cases region contains 15 `.grid__cell` elements arranged as a deliberately irregular multi-row grid. Five `.content__item` case records were observed: Barbara Scerbo, Beatrice Cortese, Viceversa, Codeway, and Miranda Biondi.
- Each case record has title, description, service labels, optional award label, image, and external case link. The data appears repeated in markup; whether it is CMS-generated is `Not yet verified`.
- Contact and publication/award text is repeated in marquee-like structures, likely generated from a smaller source list, but the exact data pipeline is `Not yet verified`.
- The footer includes static link groups and a fixed footer background layer.

## Responsive changes

- Desktop uses very large title typography and a two-column/irregular case grid.
- Tablet retains a two-column-style grid at effective 614px width; the effective mobile width (312 CSS px for requested 390 px) substantially reduces section heights, hides alternate zero-sized grid cells, and reflows projects into a single visible column sequence. The cases section measured about 980 px.
- Below 480px the desktop hero background layer is hidden while hero typography remains visible.
- Exact breakpoint thresholds and the complete mobile grid column rules are `Not yet verified`.

## Captures

See `screenshots/` for initial hero, post-animation hero, project-scroll, and project-hover captures across the requested viewport settings.
