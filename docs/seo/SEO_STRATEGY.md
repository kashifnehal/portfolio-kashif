# SEO Strategy — Kashif Nehal Portfolio

## Objective

Establish `kashifnehal.com` as the clearest, most authoritative official web presence for the person **Kashif Nehal** so that search engines can confidently associate this website with the person entity and serve it as the primary result for all branded search queries.

## Primary Entity

| Property | Value |
|---|---|
| Person Name | Kashif Nehal |
| Alternate Name | Nehal Kashif |
| Job Title | Software Engineer & UX/UI Designer |
| Location | Bangalore, India |
| Official Website | https://kashifnehal.com |
| Contact | hello@kashifnehal.com |

## Target Search Queries

### Brand Queries (Highest Priority)
1. Kashif Nehal
2. Nehal Kashif
3. Kashif Nehal portfolio
4. Kashif Nehal website
5. Kashif Nehal developer
6. Kashif Nehal software engineer

### Professional Queries
7. Kashif Nehal software engineer
8. Kashif Nehal senior software engineer
9. Kashif Nehal frontend developer
10. Kashif Nehal React developer
11. Kashif Nehal Next.js developer
12. Kashif Nehal computer science engineer
13. Kashif Nehal designer

### Location Queries
14. Kashif Nehal Bangalore
15. Kashif Nehal India

### Profile Queries
16. Kashif Nehal LinkedIn
17. Kashif Nehal GitHub
18. Kashif Nehal projects
19. Kashif Nehal portfolio website

## Entity SEO Strategy

### Approach
Use **Entity SEO** (not keyword stuffing). Google's Knowledge Graph identifies real-world entities. The goal is to make the website unambiguously represent the Person entity named "Kashif Nehal".

### Core Principles
1. Consistent name usage in title, H1, structured data, and body copy
2. JSON-LD Person entity with `@id` cross-referencing ProfilePage and WebSite
3. `sameAs` links to verified external profiles for entity co-referencing
4. `rel="me"` on all external profile links for identity claim verification
5. Canonical URLs on every page to prevent duplicate content dilution
6. Dedicated `/about` page providing a rich, authoritative profile

## Content Strategy

### Do
- Use "Kashif Nehal" naturally in headings, intro copy, and metadata
- Include accurate professional information verified against project content
- Link to real external profiles with `rel="me"`

### Never
- Keyword stuffing or name repetition in unnatural ways
- Fabricate companies, awards, locations, or credentials
- Create doorway pages targeting single query variations
- Hide keywords in CSS or invisible text

## Rendering Strategy

The site uses **Next.js SSG (Static Site Generation)**. All pages are pre-rendered at build time, which means:
- All important HTML text is in the initial HTML payload
- No JavaScript execution is required for search engine crawlers
- Google can parse and index all content immediately
