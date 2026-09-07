# Implementation Prompt Roadmap

This file is a reference index for the approved implementation sequence. Execute one prompt at a time, update `/docs`, validate locally, report the result, and wait for approval before starting the next prompt.

## Prompt 0: Repository assessment

Inspect the repository, framework, dependencies, Node/package manager, TypeScript, linting, build, and Git state. Do not implement the website.

## Prompt 1: Documentation system

Create `/docs` as the project source of truth with status, changelog, TODO, reference, architecture, design, development, testing, and decisions records.

## Prompt 2: Reference forensic analysis

Inspect the live reference at desktop and mobile viewports. Document page architecture, design system, interactions, technology, screenshots, and originality boundaries.

## Prompt 3: Animation forensic analysis

Challenge the first pass with runtime and bundle inspection. Document load, hero, scroll, hover, project opening, marquee, WebGL, CSS animation, timing, trigger, and reduced-motion evidence.

## Prompt 4: Visual and responsive forensic analysis

Measure typography, colors, spacing, assets, image behavior, breakpoints, responsive layout, mobile substitutions, and visual hierarchy. Record asset requirements without redistributing protected assets.

## Prompt 5: Portfolio architecture

Define content/UI/animation/routing boundaries, responsibilities, design tokens, typed project data, motion lifecycle, WebGL decision, routes, testing, performance, accessibility, and implementation sequence.

## Prompt 6: Technical foundation

Implement only the foundation: tokens, typography system, responsive primitives, GSAP/ScrollTrigger, Lenis, reduced motion, reusable motion hooks, routing foundation, typed placeholder data, boundaries, and browser-test scaffolding.

## Prompt 7: Homepage structure

Build the semantic structural skeleton for navigation, hero, introduction, projects, recognition, services, contact, and footer using placeholder content. Keep animation minimal.

Now implement the homepage structure.

Use the architecture and reference specifications.

DO NOT focus on perfect animation yet.

Build the structural skeleton for:

1. navigation
2. hero
3. introduction/about
4. selected projects
5. recognition/achievements
6. services/capabilities
7. contact
8. footer/project archive if required by our content model

IMPORTANT:
Use placeholder content that is clearly separated from presentation.

Do NOT use Patrick David's personal information or project copy.

Create reusable sections.

FOCUS ON:

- correct layout
- correct hierarchy
- responsive grid
- correct typography hierarchy
- correct spacing
- semantic HTML

At this stage, animations should be minimal placeholders.

After implementation:

DESKTOP TEST:
1440x900

TABLET:
768x1024

MOBILE:
390x844

Check:

- overflow
- horizontal scroll
- incorrect widths
- broken typography
- collisions
- clipped content
- inaccessible elements
- layout instability

Then run:

- lint
- build

Open the site and inspect it visually.

Perform a senior code review.

Fix all obvious issues before finishing.

Do not proceed into detailed animation implementation yet.

Final response must include:

- what was expected
- what was built
- tests
- review findings
- fixes
- remaining gaps
- whether expectation was satisfied
- anything needed from me

## Prompt 8: Hero and intro refinement

Now implement and refine the HERO / INTRO experience.

Reference:
https://bepatrickdavid.com/

Use:
docs/reference/animation-spec.md
docs/reference/design-system.md
docs/reference/responsive-spec.md

DO NOT copy the original text or identity.

Replace it with my portfolio content.

OBJECTIVE

Reproduce the reference's:

- visual hierarchy
- timing
- rhythm
- entrance behavior
- typography choreography
- spatial composition
- cursor/mouse behavior if applicable
- scroll response
- overall emotional feel

Do NOT settle for:

- generic fade-in
- generic slide-up
- generic text reveal

Use the analyzed motion specification.

IMPLEMENT:

1. Initial state
2. Loading/intro state
3. Hero text animation
4. Supporting information
5. visual/image behavior
6. pointer behavior if applicable
7. hero scroll behavior
8. transition into next section

IMPORTANT

Compare implementation against reference recordings/screenshots.

Use the same viewport sizes.

Run repeated tests rather than checking only once.

Check animation:

- on first load
- on refresh
- after client navigation
- on resize
- on mobile
- with reduced motion

FIX:

- flashes
- layout shifts
- animation restarts
- duplicate timelines
- ScrollTrigger leaks
- hydration mismatches

VISUAL QA

Capture screenshots:

- initial
- mid animation
- completed
- mobile

Compare against the reference specification.

If your implementation differs, diagnose WHY and fix it.

Do not merely tell me that it is "close".

Run:

- lint
- build
- browser checks

Then review the code for:

- unnecessary rerenders
- incorrect useEffect dependencies
- GSAP context cleanup
- client/server boundaries
- performance
- accessibility

Fix issues.

FINAL REPORT:

- expectation
- implementation
- animation behavior
- test results
- visual QA
- fixes
- remaining mismatch
- whether expectation is satisfied
- anything required from me

Implement the hero/intro composition and measured motion behavior. Compare initial, mid, settled, mobile, resize, navigation, and reduced-motion states against the reference specification.

## Prompt 9: Selected projects

Implement the SELECTED PROJECTS system.

Reference:
https://bepatrickdavid.com/

Use the previously extracted project behavior.

Do not use original project names, descriptions, imagery, branding or links.

ARCHITECTURE

Create:

ProjectGrid
ProjectCard
ProjectMedia
ProjectMeta
ProjectHoverInteraction

Data comes from a typed project data file.

Each project should have:

- id
- slug
- title
- category
- year
- description
- image
- optional secondary image
- href/slug

INTERACTION

Reproduce the reference's interaction language as closely as technically possible:

- hover
- image movement
- scaling
- text behavior
- cursor behavior
- reveal
- transitions
- scroll behavior

Do NOT use simplistic CSS hover if the reference requires a richer interaction.

Use GSAP where appropriate.

MOBILE

Since hover doesn't exist on touch devices:

- define the mobile equivalent
- do not invent an awkward fake hover
- ensure taps remain intuitive

TEST:

Desktop:
1440x900

Tablet:
768x1024

Mobile:
390x844

Test:

- hover in
- hover out
- moving rapidly between projects
- scrolling during hover
- clicking while animation is active
- keyboard focus
- repeated interaction

Check:

- no stuck states
- no memory leaks
- no console errors
- no layout jumping

Run lint/build.

Then perform a self-review:

- Is the component reusable?
- Is animation cleanup correct?
- Is content separated from UI?
- Is accessibility acceptable?
- Does the interaction remain performant?

Fix every issue you can identify.

FINAL RESPONSE:
Expectation
Result
Tests
Visual review
Fixes
Remaining gaps
Satisfied?
Anything required from me?

Implement typed `ProjectGrid`, `ProjectCard`, media, metadata, and project interaction components. Support desktop hover, mobile touch, keyboard focus, reveal, and controlled transitions.

## Prompt 10: Project opening transition

Now implement the PROJECT OPENING TRANSITION.

Reference:
https://bepatrickdavid.com/

Use the previously captured behavior and animation specification.

This must NOT be implemented as a simple:
opacity: 0 → 1

The target is a connected visual transition between:
PROJECT CARD
and
PROJECT DETAIL PAGE

IMPLEMENTATION GOAL

When the user activates a project:

1. identify clicked project
2. capture the visible project media position
3. start transition state
4. animate the media/visual from source geometry toward destination geometry
5. coordinate text/content transition
6. transition routing without visual discontinuity
7. arrive at project detail page
8. complete destination animation
9. preserve back navigation behavior

Use the most suitable modern technique:

- GSAP
- FLIP-style geometry
- View Transitions API where appropriate
- shared layout measurement
- route coordination

Do not force one technique if another is more reliable.

IMPORTANT ENGINEERING CONSTRAINTS

The transition must:

- work on slow networks
- handle image loading
- handle rapid clicks
- prevent double navigation
- prevent scroll jumps
- work on direct route loads
- work when JavaScript executes slowly
- degrade gracefully
- work on mobile

TEST CASES

1. click normally
2. double-click
3. click rapidly on different projects
4. open direct project URL
5. browser refresh
6. browser back
7. browser forward
8. slow connection
9. mobile
10. reduced-motion

REPEAT THE TESTS MULTIPLE TIMES.

Record any inconsistency.

VISUAL QA

Compare:

- source card
- transition midpoint
- destination page
- reverse transition

against the reference behavior.

Fix until stable.

Then:

- lint
- build
- browser test
- code review

Pay special attention to:

- React lifecycle
- router behavior
- image loading
- stale refs
- GSAP cleanup
- scroll restoration
- accessibility

FINAL RESPONSE MUST SAY:

EXPECTATION:
...

IMPLEMENTED:
...

TESTED:
...

FAILED:
...

FIXED:
...

REMAINING:
...

SATISFIED:
YES/NO

REQUIRED FROM USER:
...

Implement the connected project-card to project-detail transition with routing, geometry/media continuity, rapid-click protection, slow-network fallback, back behavior, mobile support, and reduced motion.

## Prompt 11: Project detail pages

Now build the PROJECT DETAIL PAGE system.

Route:
/projects/[slug]

Use the reference for:

- information hierarchy
- visual rhythm
- image presentation
- scroll behavior
- transitions
- typography
- project navigation

Do not copy original project content.

Build a reusable project detail template driven entirely by typed project data.

REQUIRED STRUCTURE

At minimum determine from the reference analysis whether we need:

- project header
- title
- metadata
- hero visual
- overview
- content blocks
- gallery
- outcomes
- next project

Do not add sections just because they are common portfolio sections.
Use the reference architecture and my content needs.

MOTION

Implement:

- route entrance
- hero reveal
- image reveal
- text reveals
- scroll-linked effects
- next-project transition

Do not overanimate every paragraph.

The goal is controlled motion.

RESPONSIVE

Test:
1440x900
1024x768
768x1024
390x844

CHECK:

- image cropping
- content order
- typography
- horizontal overflow
- scroll behavior
- fixed/sticky elements
- transition behavior

TEST ROUTING:

- direct URL
- browser refresh
- back
- forward
- open from project card
- deep link

Run lint/build and browser tests.

Perform a senior review and fix issues.

Final response:
expectation
implementation
tests
review
fixes
remaining gaps
satisfied?
anything needed from me?

Build the reusable `/projects/[slug]` template from typed project data with only the required hierarchy, controlled entrance/image/text motion, next-project navigation, and responsive behavior.

## Prompt 12: Remaining homepage sections

Finish the remaining homepage sections using the reference specification.

Sections may include:

- about/introduction
- awards/recognition
- press/mentions
- services/capabilities
- contact
- project archive
- footer

IMPORTANT:
These must represent MY portfolio.

Do not reproduce the original person's claims,
credentials, awards, clients or contact information.

For each section:

1. implement semantic markup
2. implement reference-inspired layout
3. implement appropriate motion
4. implement responsive behavior
5. implement keyboard accessibility
6. verify against screenshots/reference

DO NOT overanimate.

Use animation hierarchy:

Level 1:
essential interaction

Level 2:
section transition

Level 3:
decorative motion

Keep decorative animation minimal.

Run:
lint
build
browser checks

Test all pages.

Perform a full code review.

Fix:

- duplicate code
- inconsistent spacing
- inconsistent motion
- accessibility issues
- console errors
- responsive bugs

At the end:
What was expected?
What was completed?
What was tested?
What did you fix?
What remains?
Is it satisfied?
Do you need anything from me?

Complete about, recognition, press, services, contact, archive, and footer sections only where supported by the content model. Use original portfolio content and accessible controlled motion.

## Prompt 13: Responsive engineering pass

Perform a dedicated RESPONSIVE ENGINEERING PASS.

Do not add new features.

Your task is to find and fix responsive problems.

Test these exact viewports:

390x844
393x873
430x932
768x1024
820x1180
1024x768
1280x800
1440x900
1536x864

For every page inspect:

- navigation
- hero
- typography
- project grid
- project interaction
- project transition
- project detail
- images
- sticky content
- footer

CHECK FOR:

- horizontal overflow
- accidental horizontal scroll
- text clipping
- oversized typography
- incorrect line breaks
- broken fixed positioning
- impossible hover interactions
- touch issues
- animation timing
- excessive motion
- WebGL performance
- layout shift

MOBILE ANIMATION RULE

Replace desktop hover interactions with appropriate touch behavior.

Do not simply disable everything.

RESPONSIVE GSAP

Verify that ScrollTrigger measurements update correctly after resizing.

Do not create multiple competing timelines.

Use gsap.matchMedia() when appropriate.

Run browser tests at every listed viewport.

Fix every problem found.

Then perform a second pass after fixes.

FINAL RESPONSE:
expectation
initial problems
fixes
second-pass results
remaining problems
satisfied?
anything needed from me?

Test the full application at 390x844, 393x873, 430x932, 768x1024, 820x1180, 1024x768, 1280x800, 1440x900, and 1536x864. Fix overflow, clipping, touch, resize, ScrollTrigger, timing, and WebGL issues.

## Prompt 14: Performance and accessibility audit

Perform a dedicated PERFORMANCE + ACCESSIBILITY audit.

DO NOT add visual features.

Audit the complete application.

PERFORMANCE

Check:

- initial JavaScript
- image sizes
- image formats
- lazy loading
- font loading
- client component usage
- unnecessary hydration
- GSAP initialization
- ScrollTrigger count
- animation loops
- Lenis loop
- WebGL load
- Three.js bundle
- route transitions
- memory leaks

For WebGL, if present:

- pixel ratio
- canvas resolution
- animation loop
- texture sizes
- model size
- cleanup
- mobile fallback

ACCESSIBILITY

Check:

- semantic headings
- landmark elements
- navigation
- focus states
- keyboard navigation
- button/link semantics
- image alt text
- labels
- contrast
- touch target size
- reduced motion

Test:

prefers-reduced-motion: reduce

When reduced motion is enabled:

- disable unnecessary smooth scrolling
- reduce decorative animation
- preserve functional transitions
- keep navigation usable
- do not make content inaccessible

Run:

- lint
- build
- browser tests

Use available automated accessibility tooling if already installed or practical.

Fix every issue you can.

Then repeat the audit after fixes.

Final response:
expectation
audit findings
fixes
verification
remaining risks
satisfied?
anything required from me?

Audit JavaScript, images, fonts, hydration, animation loops, Lenis, WebGL, memory, semantics, contrast, keyboard access, touch targets, and reduced motion. Fix and retest.

## Prompt 15: Automated browser test suite

Build a practical automated browser test suite for the portfolio.

Use Playwright if not already configured.

DO NOT test internal implementation details unnecessarily.

Test user-visible behavior.

MINIMUM TESTS

HOME

1. homepage loads
2. no horizontal overflow
3. navigation works
4. hero renders
5. projects render
6. project hover/interaction works
7. project opens
8. contact link works

PROJECT PAGE

9. project route loads directly
10. refresh works
11. back works
12. forward works
13. next project works if implemented

RESPONSIVE

Run at:
390x844
768x1024
1440x900

ANIMATION SAFETY

Test:

- initial load
- resize
- repeated navigation
- rapid interaction
- reduced motion

ERROR DETECTION

Fail the test if there are unexpected:

- console errors
- page errors
- failed critical network requests
- hydration warnings where detectable

VISUAL TESTS

Add screenshot tests for major stable states where appropriate.

Do NOT create brittle screenshot tests for frames
that naturally change continuously.

Instead capture deterministic states such as:

- initial loaded homepage
- settled hero
- settled project list
- project detail loaded
- mobile homepage

After test implementation:

Run the COMPLETE SUITE.

Fix failures.

Run it again.

Then inspect whether the tests themselves are reliable
or merely passing accidentally.

Final response:

- tests created
- test count
- first-run failures
- fixes
- second-run result
- flaky tests
- known limitations
- expectation
- satisfied?
- anything needed from me?

Cover user-visible home, navigation, projects, detail routes, back/forward, responsive behavior, rapid interactions, reduced motion, console/page errors, critical requests, and deterministic screenshots.

## Prompt 16: Final visual and motion QA

Perform a FINAL VISUAL + MOTION QA pass against:

https://bepatrickdavid.com/

Our site is not supposed to use the original content or identity.

The purpose of this test is to determine whether we successfully reproduced
the RELEVANT DESIGN LANGUAGE, layout relationships, animation behavior,
interaction quality and overall visual rhythm.

DO NOT assume that "looks good" means "matches the specification."

COMPARE BOTH SITES AT:

1440x900
1280x800
1024x768
768x1024
390x844

COMPARE:

1. viewport composition
2. typography scale
3. page gutters
4. section spacing
5. visual hierarchy
6. project sizes
7. image proportions
8. whitespace
9. animation timing
10. scroll response
11. hover behavior
12. cursor behavior
13. project transition
14. project detail transition
15. mobile behavior

CREATE A QA TABLE:

Area
Reference behavior
Our behavior
Difference
Severity
Likely cause
Fix

Classify differences:

P0 = broken functionality
P1 = major visual/interaction mismatch
P2 = noticeable mismatch
P3 = minor polish
P4 = intentional difference

Focus first on P0/P1.

For animations, compare actual recorded behavior where available.

Do not compare only screenshots.

Review:

- start state
- middle state
- final state

For important transitions.

FIX THE ISSUES.

After fixing:
repeat the comparison.

Then perform a final regression test.

IMPORTANT:
Do not randomly tweak CSS until something "looks closer."

Every fix must correspond to an identified discrepancy.

Check for side effects after each major fix.

Run:

- lint
- build
- Playwright tests

At the end provide:

FINAL VISUAL QA SUMMARY

P0:
...

P1:
...

P2:
...

P3:
...

INTENTIONAL DIFFERENCES:
...

FIXES MADE:
...

REMAINING DIFFERENCES:
...

FINAL ASSESSMENT:
...

Was the original expectation satisfied?
YES / PARTIALLY / NO

What would still improve it?

What do you require from me?

Compare the implemented experience against the reference specification at all required viewports and classify P0-P4 differences. Fix evidence-based discrepancies and rerun regression.

## Prompt 17: Final senior review

You are now the senior engineer reviewing the COMPLETE portfolio
before production deployment.

Do not add new design features.

Your job is to find things that can go wrong.

REVIEW:

ARCHITECTURE

- component boundaries
- server/client usage
- dependency usage
- data separation
- animation separation

CODE QUALITY

- duplication
- dead code
- unused imports
- magic numbers
- excessive abstractions
- naming
- TypeScript safety

GSAP

- cleanup
- ScrollTrigger cleanup
- duplicate initialization
- context usage
- resize handling
- route transitions

LENIS

- lifecycle
- RAF loop
- reduced motion
- mobile behavior

THREE.JS

- cleanup
- memory
- texture disposal
- rendering cost
- fallback

NEXT.JS

- routing
- hydration
- image handling
- metadata
- loading/error states
- caching where relevant

ACCESSIBILITY

- keyboard
- focus
- reduced motion
- semantic structure
- contrast

RESPONSIVENESS

- all tested breakpoints
- unusual screen sizes
- orientation changes

PERFORMANCE

- bundle
- images
- fonts
- animations
- WebGL

SECURITY

- environment variables
- exposed secrets
- external script risks
- unsafe HTML
- user-controlled URLs

TESTING

- Playwright coverage
- stable screenshots
- error detection
- major interaction coverage

SEO

- metadata
- title
- description
- Open Graph
- sitemap if appropriate
- robots if appropriate

RUN EVERYTHING

Run the full available:

- lint
- typecheck
- build
- test
- e2e
- accessibility checks

Fix any issue you discover.

Then run everything again.

Do not stop after the first successful run.

Finally inspect git diff and remove:

- accidental files
- temporary debug code
- console.log
- test artifacts
- unused dependencies

Do not remove anything important without checking.

FINAL REPORT

1. Overall status
2. Tests performed
3. Test results
4. Issues found
5. Issues fixed
6. Remaining known limitations
7. Performance concerns
8. Accessibility concerns
9. Production readiness
10. Expectation of the entire project
11. Whether the expectation was satisfied
12. Anything still required from me

Be honest. If something could not be verified, explicitly say so.

Review architecture, lifecycle, dependencies, routing, accessibility, responsiveness, performance, security, SEO, tests, debug artifacts, and production readiness. Run every available validation command again.

## Working decisions

- Package manager: npm.
- Deployment target: Vercel with domain `kashifnehal.com`.
- Temporary copy/assets/links: use replaceable project-owned or generated placeholders now; replace final content later without repeatedly blocking implementation.
- WebGL: approved only as an isolated optional visual with a fallback and reduced-motion/mobile safeguards.
- Legacy components: delete disconnected `app/components` code when cleanup is requested; preserve `data/` and `public/`.
- Final identity: Kashif Nehal.
