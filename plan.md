# MONTYX RECORDS Distribution — updated landing-page plan

**Status: owner clarified the portal and upstream provider; landing, portal CTA, comparison, YouTube guide and graphic destination marks are implemented locally. TypeScript check, 20/20 tests, production build and static asset/manifest smoke pass. Source publication, standalone-handler verification and production verification remain open.** The current GitHub `main` baseline is `6a4596e6`. Unpushed source includes the native Node 24 ESM import fix, sourced 2026 distributor comparison and rebuild described below. The existing MONTYX mark, dark/crimson identity, private-data boundaries, Resend flow and low-end device safeguards must be preserved.

## Product scope and evidence

Rebuild only the marketing landing page at `montyxlabel.cyou`; do not rebuild or change the external artist portal. The primary **Get Started** buttons link directly to `https://user.montyxlabel.cyou/login`, whose login page also exposes the portal’s own signup path. Do not create a local login form, account database, fake signup flow or separate portal deployment.

The owner identifies S-Music Distribution (`https://smusicdistribution.com/`) as the white-label upstream. Its public homepage, accessed 2026-11-01, claims free user/white-label accounts, unlimited artist/user/catalog management, 375+ audio DSPs and 125+ video platforms; it also states a 20% gross-royalty share for its white-label arrangement and says Beatport/Traxsource are not available to third-party white-label users at that time. Distinguish those provider statements from owner-confirmed MONTYX terms. MONTYX may say its portal is free and has no release-count cap based on the owner’s direct confirmation, but label this as MONTYX’s current offer and keep release review, provider acceptance, territory, and store eligibility caveats visible. Do not say “all platforms,” universal delivery, or independent DSP verification. Include the provider’s 20% gross-revenue term as a source-attributed upstream cost caveat; do not imply it is necessarily MONTYX’s entire artist split or a guaranteed net payout.

Build a researched comparison of MONTYX/S-Music and eight services—DistroKid, TuneCore, CD Baby, Ditto, UnitedMasters, Amuse, RouteNote and ONErpm—using the cited report `docs/distribution-provider-comparison-2026-11.md`. Show each service’s public entry price/model, published release-count language, payout/commission basis, advertised store-network claim where a source gives one, and YouTube OAC status. Attribute every provider claim, use the research date (2026-11-01), give source links, state USD/region and terms may change, and distinguish gross/net/optional-service deductions. Use “not stated in pages reviewed,” not inference. The comparison is educational—not a guarantee of current terms or endorsement. Make it readable on narrow screens without forcing a tiny table.

Add a careful YouTube guide that separates (1) YouTube Music delivery and auto-generated Topic/Art Track content, (2) an Official Artist Channel (OAC) application/YouTube-controlled consolidation of eligible artist channels, and (3) Content ID. YouTube’s official help describes OAC consolidation but eligibility and the result belong to YouTube. S-Music advertises YouTube OAC/Topic support, but its public description is ambiguous; say it advertises the service, not that MONTYX or YouTube has verified every user or guarantees channel merges. Refer to the portal’s own Content ID eligibility page, including exclusive worldwide rights, no third-party claims, and no AI-assisted musical elements. No automatic Topic/personal channel merge is promised.

## Implementation and structure

Reuse the existing React, TypeScript, Vite, Wouter and stylesheet stack; do not add another frontend framework or build a second portal. Keep the existing root route and all existing public/legal/contact/rights routes. The top-level nav, hero, mid-page and closing CTAs use a normal external anchor to the user’s portal login; preserve contact as a secondary support option. Add section anchors for `platforms`, `compare`, `youtube`, `process`, `about` and `faq`, and synchronize `client/public/manus-routes.json` only if route paths change.

- `client/src/components/distribution/DistributionLanding.tsx` — landing composition, offer copy, destination grid, release workflow, ownership, FAQs, and final CTA.
- `client/src/components/distribution/DistributionComparison.tsx` with a dedicated stylesheet (or the existing distribution CSS module) — source-linked comparison table and mobile cards.
- `client/src/components/distribution/YouTubeGuide.tsx` — Topic/Art Track, OAC and Content ID distinctions and official help links.
- `client/src/components/distribution/DistributionLanding.css` — responsive layout, focus states and reduced-motion rules.
- `client/src/components/SiteLayout.tsx` — anchor navigation and the direct external Get Started CTA; keep `/montyx-mark.png` as-is.
- `api/`, `server/` — retain isolated health/SEO/contact/settings functions and native ESM import corrections; do not restore admin/login CRUD or alter private data.
- `docs/distribution-provider-comparison-2026-11.md` and `docs/DSP_MARKS.md` — retain comparison citations, upstream caveats and official logo provenance.
- `README.md`, `TODO.md` and `plan.md` — state the true portal location, attribution limits, upstream split caveat, no-admin boundary and verification status.

Use official Simple Icons vector paths or properly sourced local image marks for services actually named in upstream material. Remove text in place of logo art; keep the service name as accessible supporting text. Do not alter MONTYX’s existing `montyx-mark.png` or favicon. Do not show Beatport/Traxsource as available white-label destinations based on S-Music’s present public exception. Other unverified destinations remain illustrative and must be labeled accordingly. Avoid a 150-logo wall: a compact curated set of actual graphic marks plus the explicitly attributed “375+ audio / 125+ video” S-Music claim is more readable and honest.

## Design direction

- **Design movement:** Signal Atlas / sonic cartography, with the low-friction onboarding clarity of a modern distribution product; category inspiration only, not a DistroKid clone.
- **Core principles:** action first, transparent economics, artwork/artist ownership, provider claims attributed, restrained mobile weight.
- **Color philosophy:** retain the existing near-black/graphite foundation and MONTYX signal crimson `#E11D35`; off-white copy keeps the dense comparison legible. Do not imitate a competitor’s recognizable brand palette.
- **Layout paradigm:** asymmetric cinematic hero and direct account CTA, followed by clean horizontal editorial chapters; the comparison is a structured, source-linked table on desktop and stacked provider cards on mobile.
- **Signature elements:** existing MONTYX mark unchanged; slim crimson signal rules; polished DSP icon rail; subtle orbit visual as decoration, never as content.
- **Interaction philosophy:** external Get Started opens the real portal; no fake signup. Table details remain readable without hover or motion; outbound citations and official help are direct links.
- **Animation:** keep the existing reduced-motion-aware Three.js feature; do not initialize WebGL on small/touch, save-data/slow, low-memory or low-core devices; honor `prefers-reduced-motion`; avoid scroll-jacking, autoplay and continuous offscreen animation.
- **Typography system:** retain the current Space Grotesk display / DM Sans body pairing and mobile system fallbacks.
- **Brand essence:** an independent Nepal-rooted music distribution front door, clear about what the white-label provider supplies; direct, independent, precise.
- **Brand voice:** concise and artist-first. Examples: “Your music. More places to be heard.” and “Free to start. Clear on the split.”
- **Wordmark & logo:** preserve the current MONTYX logo image exactly; no redesign, recoloring or replacement.
- **Signature brand color:** MONTYX signal crimson `#E11D35`.

## Existing backend and publication constraints

Preserve the owner’s explicit removal of all website admin/login/content-management access; no public admin route, hidden admin page or dormant bootstrap CLI. Preserve Supabase records, storage and fail-closed policies. Contact remains a public inquiry flow and does not expose an admin inbox. Keep the server-only Resend secret, truthful email status and draft fallback; do not change Supabase data or settings during testing.

The 2026-10-26 repair introduced isolated Vercel endpoints; the 2026-11-01 local ESM corrections for `api/contact.ts`, `api/page.ts`, `api/settings.ts`, `server/content.ts` and `server/db.ts` are still unpushed. First run the project’s typecheck, tests, production build and a local Vercel-mode HTTP smoke check; confirm route outputs, admin 404, CTA and logo. Preserve the user-edited `.env.example`. Then fetch current `origin/main`, commit only intended source/docs, push normally to `SoloFFCreator/montyx-records`, and verify Vercel production and both site aliases before calling any fix live. A successful push/checkpoint alone is not production verification.
