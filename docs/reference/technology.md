# Reference Technology Evidence

Inspection date: 2026-09-07. Each item is classified only from browser evidence.

| Technology/area             | Status  | Evidence                                                                                                                                       |
| --------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework                   | UNKNOWN | The page delivers bundled assets and a single document, but no framework marker was established from the rendered page.                        |
| JavaScript bundle           | FOUND   | `https://bepatrickdavid.com/index.js` loaded.                                                                                                  |
| CSS bundle                  | FOUND   | `https://bepatrickdavid.com/main.bundle.css` loaded.                                                                                           |
| Custom fonts                | FOUND   | Tusker Grotesk, Neue Montreal, Migra, and Maelstrom loaded and declared with `@font-face`.                                                     |
| WebGL canvas                | FOUND   | A `canvas` with class `webgl` was present.                                                                                                     |
| Three.js                    | FOUND   | The minified `index.js` bundle contains Three.js symbols/classes such as `THREE` and WebGL renderer code; a `canvas.webgl` was present.        |
| Shaders                     | UNKNOWN | A WebGL layer exists; shader source/material implementation was not exposed by the inspection.                                                 |
| Draco                       | FOUND   | `draco/draco_wasm_wrapper.js` was requested, indicating Draco-related 3D asset decoding.                                                       |
| GSAP                        | FOUND   | The minified `index.js` bundle contains GSAP runtime symbols and ScrollTrigger integration hooks. Exact authored timelines were not recovered. |
| ScrollTrigger               | FOUND   | The bundle contains `ScrollTrigger` symbols and a `ScrollTrigger.create` integration path. Exact trigger configurations were not recovered.    |
| Lenis/smooth-scroll library | UNKNOWN | Hash navigation moved smoothly, but the library responsible was not identified.                                                                |
| Image lazy loading          | FOUND   | Case images had `lazyload`, `lazyloaded`, and current image URLs; image assets were WebP.                                                      |
| Video                       | UNKNOWN | No `<video>` elements were found in the inspected DOM.                                                                                         |
| Routing                     | FOUND   | Same-page hash targets and external links were observed; a client router was not established.                                                  |
| CMS                         | UNKNOWN | No CMS API or provider evidence was found in the browser pass.                                                                                 |
| Analytics                   | FOUND   | Matomo script and tracking request under `/analytics/matomo.js` and `/analytics/matomo.php` were observed.                                     |
| Web fonts hosting           | FOUND   | Font files were requested from the reference origin and loaded successfully.                                                                   |

## Evidence boundaries

The browser pass identifies delivered resources and rendered capabilities, not the source repository or exact implementation. No technology should be treated as GSAP, Three.js, or a specific framework without stronger evidence.
