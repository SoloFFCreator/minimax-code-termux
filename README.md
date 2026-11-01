# MONTYX RECORDS Distribution

MONTYX RECORDS Distribution is a Nepal-rooted, independent-music landing page built in React/TypeScript. It presents the current free/no-release-count-cap offer, curated destination artwork, a source-linked comparison of MONTYX/S-Music with eight distributors, a YouTube Topic/OAC/Content ID explainer, the real artist portal CTA, artist-rights language and contact details. The portal login/signup remains external at https://user.montyxlabel.cyou/login. The creative direction uses original MONTYX artwork and broad category cues only; it does not copy DistroKid or another brand’s interface. See the [six-site design reference review](docs/distribution-reference-review.md), [2026 distributor comparison](docs/distribution-provider-comparison-2026-11.md), and [DSP logo source notes](docs/DSP_MARKS.md).

The hero pairs custom 16:9 artwork with an optional Three.js scene using React Three Fiber. The 3D bundle is code-split, delayed until after the first render, paused outside the viewport and omitted for reduced-motion preferences, low-end/touch devices or browsers without WebGL. Platform artwork includes official/provider-sourced marks and Simple Icons vectors; each is used for identification only and does not imply sponsorship or endorsement. S-Music publicly claims 375+ audio DSPs and 125+ video platforms; store selection, account routing, release eligibility, territories and platform approval can reduce actual availability. Its public page currently excludes Beatport and Traxsource for third-party white-label accounts.

## Development and deployment

Use pnpm 10.18.0 and Node 22 or newer. Run `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm test`, and `pnpm build`. `pnpm dev` starts the local Express/Vite application; Vercel never starts the Vite development server. The Vite build publishes `dist/public`; small standalone Vercel functions serve health, page-specific SEO HTML, sitemap, public social settings, and contact submissions, while the legacy Express/tRPC adapter remains separate. `vercel.json` redirects retired `/releases`, `/artists/:slug`, and `/about` routes into relevant landing sections. The contact, privacy, terms, and rights routes remain available; there is no public administrator route.

Set server-only Vercel environment variables for `POSTGRES_URL` (or `DATABASE_URL`), `SUPABASE_URL`, and `SUPABASE_SECRET_KEY` (or the legacy `SUPABASE_SERVICE_ROLE_KEY`). Keep service credentials private; never use them in client variables. Set `MONTYX_SESSION_SECRET` (a unique random secret of at least 32 bytes) and `PUBLIC_SITE_URL=https://montyxlabel.cyou`. The signing secret is used only server-side. If it is not set, the app accepts a Supabase/Manus server-only signing key as a fallback; prefer the dedicated key. The public site no longer provides an administrator password-login page or password-login API. Redeploy after changing environment variables.

## Supabase schema and migrations

The app uses Supabase PostgreSQL through Drizzle. The `drizzle/schema.ts` file is the typed application schema. Reviewed, additive SQL migrations live under `supabase/migrations/` and are applied to the connected Supabase project using a migration workflow (for example, link the CLI to the existing project, then run `supabase db push`). Do not use MySQL migration files or run database DDL during Vercel function startup. The runtime startup may idempotently seed the MONTYX artist and the initial release only when those slug records are absent.

Private cover images go to the non-public `montyx-artwork` Supabase Storage bucket. The server creates the bucket on the first authorized upload if needed, with JPEG/PNG/WebP and a 3 MB limit. Public artwork is served through a stable application endpoint only after a release referencing its object key has been published. Draft files remain private; never upload unreleased audio masters to this artwork bucket.

## Existing Supabase records

At the owner's request, the public administrator page, password login, admin APIs and dormant bootstrap CLI have been removed. No website content-management interface is available. Existing Supabase records and storage objects are preserved; no records were deleted. The marketing site does not expose private records or store masters: artist accounts, uploads and release submission happen in the separate portal. Artists retain master ownership unless a separate written agreement states otherwise.

## Offer and YouTube claims

MONTYX’s current free/no-release-count-cap offer is owner-confirmed. S-Music’s public white-label page, accessed 2026-11-01, claims 375+ audio DSPs and 125+ video platforms and says it retains 20% of gross royalties for white-label service. That upstream statement is not the same as MONTYX’s artist-facing split; keep the exact split in MONTYX’s applicable terms and do not promise 100% of gross. The provider page also states Beatport and Traxsource are not available to third-party white-label users at its current publication state. YouTube Music delivery, Topic/Art Tracks, OAC applications and Content ID are separate. YouTube controls OAC eligibility and channel consolidation; no personal/Topic merge or approval is guaranteed. See the official sources linked on the landing and in the comparison report.

## Contact and privacy

The contact form validates submissions and saves them to the private Supabase database. When the Resend service is configured, it sends a plain-text notification to `support@montyxlabel.cyou`; the provider must accept the message before the page says it was emailed. If the provider is missing or rejects the request, the saved message remains and the form offers a prefilled mail-app draft. Configure `RESEND_API_KEY` as a sensitive, server-only Vercel production environment variable. The default sender is `support@montyxlabel.cyou`; if Resend requires a different verified sender, configure `RESEND_FROM_EMAIL` with an address on a verified sending domain. See [Resend's send-email API](https://resend.com/docs/api-reference/emails/send-email). Contact messages contain personal data and may be transmitted to Resend for notification; review the privacy notice and retain messages only as long as operationally needed.

Privacy, Terms, and Rights/Takedown content are editable website-use drafts, not legal advice or claims of regulatory compliance. Review them against the label's actual practices and applicable law before relying on them as legal documents.

## Environment variable reference

| Variable                                             | Purpose                                                 | Public?                              |
| ---------------------------------------------------- | ------------------------------------------------------- | ------------------------------------ |
| `POSTGRES_URL` or `DATABASE_URL`                     | Supabase PostgreSQL connection string                   | No                                   |
| `SUPABASE_URL`                                       | Supabase project API endpoint                           | Server only in this application      |
| `SUPABASE_SECRET_KEY` or `SUPABASE_SERVICE_ROLE_KEY` | Server-side private Storage access                      | No; never expose to browsers         |
| `MONTYX_SESSION_SECRET`                              | High-entropy cookie/session signing key                 | No                                   |
| `PUBLIC_SITE_URL`                                    | Canonical HTTPS origin for sitemap and metadata         | Yes, non-secret; server configured   |
| `RESEND_API_KEY`                                     | Server-only Resend credential for contact notifications | No; configure as sensitive in Vercel |
| `RESEND_FROM_EMAIL`                                  | Optional sender address on a verified Resend domain     | Server only; not a secret            |
| `PORT`                                               | Local/managed server port                               | Runtime-provided                     |

After a code push, verify Vercel's build and deployment events, then test `/`, `/contact`, `/privacy`, `/terms`, `/rights`, `/api/health`, `/api/trpc/content.home`, `/robots.txt`, `/sitemap.xml`, and the legacy redirects on both the Vercel deployment URL and intended custom domain. Check that `GET /manus-routes.json` returns the route manifest JSON. A GitHub push by itself does not prove that a production deployment succeeded.
