# Bounty.com Redesign

A modern, professional rebuild of Bounty.com, a UK pregnancy and parenting support site. Built on top of an existing partial implementation and completed into a fully working, linked, and functional site.

## Tech Stack
* **Framework**: Next.js 16 (App Router)
* **Styling**: Tailwind CSS v4
* **Fonts**: `next/font/google` (Fraunces & Plus Jakarta Sans)

## Design System
* **Colors**:
  * Background: Linen (`#FAF7F2`) for a warm, organic feel.
  * Accents: Sage green (`#6B8F71`) and Peach (`#E8A87C`) to convey growth, nature, and warmth.
  * Typography: Ink (`#1A1D23`) for high contrast, Slate (`#5C6670`) for secondary text.
* **Typography**: Fraunces (headings, serif) paired with Plus Jakarta Sans (body, sans-serif).
* **UI Features**: Liquid-glass tools bar, bento-style grids, subtle scroll-in animations, consistent 12px/20px/28px radius scale.

## Original site analysis
Bounty.com (live site) suffers from: dense, ad-interrupted layouts; a legacy ASP.NET postback-driven nav; a registration flow bundled with five or more third-party marketing opt-ins; inconsistent visual hierarchy; and no visible design system. Its core value, genuinely useful tools and week-by-week content, is buried under clutter.

This redesign keeps every core feature (due date calculator, ovulation calculator, baby name finder, week/month-by-week guides, articles, registration) and rebuilds the experience around a single clean visual system, with no ads and one honest sign-up form.

## Implemented pages
| Route | Purpose |
|---|---|
| `/` | Homepage: hero, tools bar, timeline, journey grid, articles, community, CTA |
| `/getting-pregnant` | Topic hub + working ovulation calculator |
| `/pregnancy` | Week-by-week guide (weeks 4-40) + diet, essentials, and birth-prep sections |
| `/due-date` | Due date calculator (Naegele's rule), with input validation |
| `/baby-names` | Searchable/filterable name database (40 names), deep-linkable by gender |
| `/baby` | Month-by-month guide (1-12 months) + feeding and sleep sections |
| `/toddler` | Month-by-month guide (12-24 months) + behaviour and activities sections |
| `/preschool` | Topic overview for ages 2-4 |
| `/family` | Topic overview: money, work, childcare, family life |
| `/articles` + `/articles/[slug]` | Article index and four full original articles |
| `/register`, `/login` | Demo auth forms (client-side only, clearly labelled as a demo) |
| `/checklist` | Interactive hospital bag and baby essentials checklist, saved on the device |
| `/support` | Miscarriage and baby loss support with trusted charities |
| `/search` | Site search across tools, guides and articles |
| `/guides`, `/guides/[slug]` | Ten data-driven guides in `lib/guides.js`: name styles, weaning, safer sleep, postnatal depression, immunisations, family illness |
| `/app`, `/press` | App features with store links, and press enquiries |
| `/about`, `/contact` | About and contact pages |
| `/privacy`, `/terms`, `/cookies`, `/accessibility` | Placeholder legal pages |

Every navigation link, footer link, and in-page anchor resolves to a real destination. No dead `#` links remain in primary navigation.

## Fixes made to the supplied build
* `/baby-names?gender=boy` now actually filters by gender on load (was previously ignored).
* Due date calculator now rejects future dates and dates over 42 weeks ago, with a clear message instead of silently showing negative numbers.
* All six journey-grid cards, the full header mega-menu, and the footer now link to real pages (previously several were `#` or 404s).
* The ovulation calculator, referenced from three places in the original build, is now a real, working tool.
* Week/month timeline links from the homepage deep-link into the matching week or month on the destination page.

## How to run
```
npm install
npm run dev
```
Then open `http://localhost:3000`.

To build for production:
```
npm run build
npm start
```
