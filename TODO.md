# MONTYX RECORDS Distribution — updated delivery checklist

## Landing page and artist onboarding
- [x] Preserve the existing MONTYX logo. Do not redesign or replace `client/public/montyx-mark.png` or the favicon.
- [ ] Rebuild only the public marketing landing page; keep the existing MONTYX dark/crimson identity and a professional, mobile-first distribution-product layout. Use high-level onboarding clarity from DistroKid as inspiration, but do not copy its exact UI, wording, logo, plan-card composition, distinctive visual assets or trade dress.
- [ ] Add a prominent **Get Started** CTA to the hero, shared header, and closing section; each must link directly to `https://user.montyxlabel.cyou/login`. The portal login page already provides its own account-creation link. Do not build or claim a second account/sign-up service or modify the external portal.
- [ ] Describe the owner-confirmed MONTYX offer accurately: free to access/submit releases and no stated release-count cap. Keep review, provider approval, destination selection, rights checks, territory and store availability qualifications visible. Do not claim guaranteed instant approval, delivery time, earnings or exposure.
- [ ] Keep support available at `support@montyxlabel.cyou`; contact/inquiry remains a secondary action.

## Destinations, comparison and YouTube
- [ ] Replace remaining text-only logo substitutes with real graphic marks for the curated, upstream-named DSP destinations. Keep readable service names as supporting text/accessible names. Do not alter the MONTYX mark. Exclude Beatport/Traxsource from supported white-label examples because S-Music’s public page says third-party white-label accounts do not currently receive them; clearly label any remaining examples and the provider/network claim as qualified.
- [ ] Show the S-Music public network statement only as source-attributed provider wording: “375+ audio DSPs / 125+ video platforms (S-Music claim),” not a guarantee that any single release reaches every platform or territory. Do not claim “verified by YouTube,” “verified by every DSP,” universal all-platform delivery, or add a false certification badge. Explain service selection, release/platform eligibility and territory caveats.
- [ ] Add a source-linked comparison between MONTYX/S-Music, DistroKid, TuneCore, CD Baby, Ditto, UnitedMasters, Amuse, RouteNote and ONErpm. Compare public entry price/model, published upload/release-count language, royalty/commission basis, advertised network count where stated, and YouTube OAC status. State the source access date (2026-11-01); distinguish gross vs. net, subscription vs. per-release costs and optional fees; say “not stated” where sources do not establish a term; link official sources and note terms/prices vary and change.
- [ ] Disclose the material S-Music upstream white-label statement: its public homepage claims a 20% share of gross royalties and says free accounts/white-label access; do not imply artists retain 100% of gross or that this is necessarily MONTYX’s complete artist-facing split. Attribute to S-Music and ask artists to confirm MONTYX’s own applicable agreement/terms.
- [ ] Add a clear YouTube explainer distinguishing YouTube Music Art Tracks/Topic channels, OAC application/channel consolidation, and Content ID. Attribute OAC support to S-Music’s public claim, state that YouTube controls eligibility/approval and channel behavior, and do not guarantee personal/Topic merging. Link YouTube’s official OAC help and the portal’s Content ID requirements; note the portal’s exclusive-worldwide-rights and no-AI-assisted-music criteria.
- [x] Keep the current six-site distribution UX research and eight-provider comparison report; extend it with sourced S-Music white-label terms, store exceptions, and YouTube evidence.

## Reliability, security and preserved behavior
- [ ] Finish validating native Node 24 ESM imports for isolated Vercel page/contact/settings functions and the shared Supabase helper dependency before publishing.
- [x] Keep the standalone health, page SEO, sitemap, social-settings and contact endpoints isolated from the failing Express/tRPC catch-all; the public landing/contact flow must not regress to depending on the legacy adapter.
- [ ] Keep contact validation, anti-spam controls, restricted Supabase persistence and Resend notification. Only report email sent after Resend accepts it; preserve saved-only/error states and the prefilled mailto fallback. The `RESEND_API_KEY` is production-only in Vercel; verified sender and live mail acceptance remain to be confirmed.
- [x] Keep all public admin/login/content-management APIs and the dormant admin bootstrap CLI removed. Do not delete existing Supabase rows, storage files, contracts or private notes; keep policies fail-closed.
- [x] Preserve `/contact`, `/privacy`, `/terms`, `/rights`, SEO/sitemap/robots behavior, Nepali label identity and artist master-ownership language.
- [x] Preserve low-end safeguards: no WebGL on small/touch screens, save-data/slow connections, devices reporting 4 GB or less memory, or CPUs with four or fewer cores; honor reduced motion and retain a static hero.
- [x] Preserve existing Vercel environment values; only the new sensitive production `RESEND_API_KEY` was added. Do not touch the owner's unstaged `.env.example` edit.

## Checks and delivery
- [x] Run `pnpm check` (pass), `pnpm test` (20/20 pass), `pnpm build` (pass) and `git diff --check`; verify the built route manifest returns HTTP 200 JSON matching `/`, `/contact`, `/privacy`, `/terms` and `/rights`, and the hero/logo/platform assets return HTTP 200.
- [ ] Complete the standalone-handler and production-route smoke for health/page/contact/settings/sitemap/robots, the genuine `/admin` 404, Resend sender acceptance, and the final live aliases.
- [ ] Commit and push only intended project source/docs normally to `SoloFFCreator/montyx-records` `main`; fetch/integrate concurrent main changes first and never force-push. Leave `.env.example` unstaged.
- [ ] Confirm the new Vercel deployment is ready and live HTTP responses are correct on the deployment URL plus `montyxlabel.cyou` and `www.montyxlabel.cyou`; do not claim production success from local checks or Git push alone.
- [ ] Verify a real Resend-accepted test email only after the production deployment and sending-domain confirmation; no test message has been sent.
- [ ] Provide a final handoff with the published landing URL and portal login URL, comparison source/access date, material upstream royalty/store caveats, and any unresolved blocker.
