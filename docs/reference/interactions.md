# Reference Interactions

Observed with browser automation on 2026-09-07.

## Loading and reveal

- Initial navigation exposes a `main.loading` class; after the load sequence it becomes `main.loaded`.
- The initial hero capture records the loading state; the post-animation capture records the rendered hero after a 3.5 second wait.
- Hero artwork and plane animate into place. Runtime samples measured background opacity 0 at the earliest sample, about 0.71 at 1.5s, and 1.0 at 2.5s; the plane clip-path changed from a diamond polygon to a full rectangle. Typography property timing remains `Not yet verified`.
- Case image layers are scroll-revealed. CSS declares initial `translateY(100%)`; runtime samples showed opacity/transform progressing through approximately opacity 0.07 and translateY 242px, then opacity 0.80 and translateY 53px, before opacity 1 and translateY 0.

## Scroll

- The page is vertically scrollable with a measured desktop document height of approximately 5,891 CSS px.
- Hash navigation to `#cases` updates the scroll position to approximately 572 CSS px in the loaded 1440x900 setting, with smooth motion observed during the wait.
- `#intro` and `#footer` are navigation targets; no route change occurs.
- Scroll-triggered image reveals are supported by `IntersectionObserver` in the bundle; marquee movement is implemented with CSS keyframes. Background/parallax behavior is indicated by classes such as `parallax`, `webgl`, `marquee`, `animation-line`, and `item-fade`. Exact trigger thresholds remain `Not yet verified`.

## Hover and pointer

- Case records expose `see case` links and image/content layers. The grid has overlapping layers, so a direct semantic-link hover was intercepted by another grid cell in automation.
- A project-hover screenshot was captured, but a stable CSS `:hover` state could not be isolated because overlapping grid layers intercepted pointer events. The exact pointer-driven transformation is `Not yet verified`.
- The page includes a `canvas.webgl` and bundled Three.js/WebGL code. Two mouse-position snapshots did not change the hero plane computed clip-path or transform; any other pointer response is `Not yet verified`.

## Click and navigation

- Header links use same-page hashes: `#cases`, `#intro`, and `#footer`.
- The main contact CTA and repeated contact marquees use `mailto:` links.
- Five selected case links open external Behance URLs with `target="_blank"`.
- Footer social links open external Dribbble, Behance, Twitter, and Instagram URLs with `target="_blank"`.
- Footer version links point to `v1.bepatrickdavid.com` and `v2.bepatrickdavid.com` in new tabs.
- Clicking a project image opens an in-page project content state, adds `content--open`, and adds `no-scroll` to the body. The back control animates from opacity 0/translated position to opacity 1/position 0 over the sampled 600-1000ms interval. The close result could not be completed because five duplicate back controls confused the browser selector.

## Keyboard and focus

- Tab order reached the identity link, navigation links, contact CTA, empty control buttons, and case links.
- Browser focus outlines were present on links, including an orange `rgb(229, 151, 0)` outline on header navigation. The exact focus design for every control is `Not yet verified`.
- No drag interaction was found during the inspected pass. Keyboard shortcuts are `Not yet verified`.

## Captured states

The screenshot directory contains initial hero, post-animation hero, project-scroll, project-hover, and mobile states. A distinct in-site project/detail transition was not available because case links leave the site for Behance; the transition state is therefore `Not yet verified`.
