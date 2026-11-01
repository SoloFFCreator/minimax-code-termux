const comparisons = [
  {
    name: "MONTYX RECORDS",
    model: "MONTYX · S-Music white-label",
    featured: true,
    facts: [
      [
        "Entry cost",
        "Free to start; no release-count cap in MONTYX’s current offer (owner-confirmed).",
      ],
      [
        "Release volume",
        "No stated MONTYX count limit; submission, partner review, rights checks and DSP acceptance still apply.",
      ],
      [
        "Royalty model",
        "S-Music publicly states it keeps 20% of gross royalties for white-label service. Confirm MONTYX’s exact artist split in its own terms; do not assume 100% of gross.",
      ],
      [
        "Network",
        "S-Music claims 375+ audio DSPs and 125+ video platforms. Its public page excludes Beatport and Traxsource for third-party white-label users at the time reviewed.",
      ],
      [
        "YouTube",
        "S-Music advertises OAC/Topic support. YouTube controls eligibility, approval and channel consolidation; no personal/Topic merge is guaranteed.",
      ],
    ],
    sources: [
      ["S-Music public offer", "https://smusicdistribution.com/"],
      [
        "YouTube OAC help",
        "https://support.google.com/youtube/answer/7336634?hl=en",
      ],
      [
        "Portal Content ID criteria",
        "https://user.montyxlabel.cyou/docs/content-id",
      ],
    ],
  },
  {
    name: "DistroKid",
    model: "Annual subscription",
    facts: [
      [
        "Entry cost",
        "Musician $24.99/year for 1 artist; optional extras can add costs (US page).",
      ],
      [
        "Release volume",
        "Advertises unlimited uploads per artist plan; artist slots and identity rules apply.",
      ],
      [
        "Royalty model",
        "Says it keeps 0% of store-reported stream/sale earnings; optional Social Media Pack keeps 20% of video-monetization revenue. Fees and withholding can still apply.",
      ],
      [
        "Network",
        "No comparable numeric total stated in the DistroKid pages reviewed.",
      ],
      [
        "YouTube",
        "OAC claim flow is advertised on plans; YouTube decides eligibility. Content ID is separate and paid.",
      ],
    ],
    sources: [
      ["Pricing", "https://distrokid.com/pricing/"],
      [
        "Royalty share",
        "https://support.distrokid.com/hc/en-us/articles/360013649253-How-Much-of-My-Earnings-Does-DistroKid-Keep",
      ],
      [
        "YouTube OAC",
        "https://support.distrokid.com/hc/en-us/articles/360036924633-Claiming-an-Official-Artist-Channel-on-YouTube",
      ],
    ],
  },
  {
    name: "TuneCore",
    model: "Annual or per-release",
    facts: [
      [
        "Entry cost",
        "US Rising Artist unlimited plan $24.99/year; pay-per-release single $24.99 first year.",
      ],
      [
        "Release volume",
        "Unlimited annual plans are marketed as unlimited; plan rules and store review apply.",
      ],
      [
        "Royalty model",
        "States artists receive 100% of net recording-distribution receipts; social/YouTube monetization has a separate 20% commission.",
      ],
      [
        "Network",
        "Destination totals vary by the list and territory; no directly comparable count included here.",
      ],
      [
        "YouTube",
        "Offers an OAC request process with eligibility requirements; approval and final mapping are not guaranteed.",
      ],
    ],
    sources: [
      ["Pricing", "https://www.tunecore.com/pricing"],
      [
        "Net receipts",
        "https://support.tunecore.com/hc/en-us/articles/115006503567-What-is-the-difference-between-Music-Distribution-and-Publishing-Administration",
      ],
      [
        "YouTube OAC",
        "https://support.tunecore.com/hc/en-us/articles/360052873931-YouTube-Official-Artist-Channel",
      ],
    ],
  },
  {
    name: "CD Baby",
    model: "One-time per release",
    facts: [
      [
        "Entry cost",
        "$9.99 single / $14.99 album (one-time, public US pricing).",
      ],
      [
        "Release volume",
        "No account-wide upload cap stated in the pages reviewed; price is charged per release.",
      ],
      [
        "Royalty model",
        "Retains 9% of digital-distribution revenue (artist receives 91%); payment conditions and separate service terms apply.",
      ],
      [
        "Network",
        "No directly comparable store total included in the reviewed price/help pages.",
      ],
      [
        "YouTube",
        "CD Baby says it stopped processing OAC requests in March 2025; its status may change. Content ID is separate.",
      ],
    ],
    sources: [
      ["Pricing", "https://cdbaby.com/cd-baby-cost/"],
      ["Artist agreement", "https://cdbaby.com/artist-agreement/"],
      [
        "OAC status",
        "https://support.cdbaby.com/hc/en-us/articles/360026725111-Can-I-claim-my-YouTube-Official-Artist-Channel-with-CD-Baby",
      ],
    ],
  },
  {
    name: "Ditto Music",
    model: "Annual subscription",
    facts: [
      [
        "Entry cost",
        "Starter $19/year (1 artist); Pro $59/year (2 artists); label pricing varies.",
      ],
      [
        "Release volume",
        "Advertises unlimited releases, qualified by fair-use terms and plan rules.",
      ],
      [
        "Royalty model",
        "Advertises 100% streaming income; publishing/sync on Pro/Label has 15% commission. Terms describe a £25 payment threshold.",
      ],
      [
        "Network",
        "No directly comparable current store count included in the reviewed pages.",
      ],
      [
        "YouTube",
        "OAC application is for eligible Pro/Label accounts; YouTube approval and mapping still apply.",
      ],
    ],
    sources: [
      ["Pricing", "https://dittomusic.com/en/pricing"],
      ["Terms", "https://dittomusic.com/en/terms"],
      [
        "YouTube OAC",
        "https://support.dittomusic.com/en/articles/6701116-how-do-i-get-an-official-artist-channel-on-youtube",
      ],
    ],
  },
  {
    name: "UnitedMasters",
    model: "Free entry + paid tiers",
    facts: [
      [
        "Entry cost",
        "DEBUT+ $19.99/year; SELECT $59.99/year; DEBUT does not distribute releases.",
      ],
      [
        "Release volume",
        "Paid DEBUT+, SELECT and PARTNER tiers advertise unlimited releases; plan conditions apply.",
      ],
      [
        "Royalty model",
        "Paid plans advertise 100% ordinary royalties. Optional Content ID is $4.99/release and retains 20% of gross Content ID royalties.",
      ],
      [
        "Network",
        "Store availability varies; no common network count included in the reviewed tier pages.",
      ],
      [
        "YouTube",
        "OAC is an application requiring active membership and eligibility; YouTube controls approval.",
      ],
    ],
    sources: [
      ["Pricing", "https://unitedmasters.com/en/pricing"],
      [
        "Release tiers",
        "https://support.unitedmasters.com/hc/en-us/articles/1500005818801-How-many-releases-can-I-distribute-per-month-with-each-UnitedMasters-membership-tier",
      ],
      [
        "YouTube OAC",
        "https://support.unitedmasters.com/hc/en-us/articles/17992451446931-How-do-I-get-an-Official-Artist-Channel-OAC-on-YouTube",
      ],
    ],
  },
  {
    name: "Amuse",
    model: "Annual subscription",
    facts: [
      [
        "Entry cost",
        "Artist $23.99/year; Artist Plus $39.99; Artist Pro $59.99 (public pricing page).",
      ],
      [
        "Release volume",
        "Subscription plans advertise unlimited releases; review and rights policies still apply.",
      ],
      [
        "Royalty model",
        "Advertises 100% while subscribed; says catalog can remain live at 75% after expiry. Conversion, withdrawal and other fees may apply.",
      ],
      [
        "Network",
        "A comparable network total was not established in the pages reviewed.",
      ],
      [
        "YouTube",
        "OAC request is available subject to YouTube eligibility; pages reviewed do not promise a universal Topic-to-personal merge.",
      ],
    ],
    sources: [
      ["Pricing", "https://www.amuse.io/en/release/pricing"],
      [
        "Royalty and payments",
        "https://support.amuse.io/en/articles/107771-payment-royalties",
      ],
      [
        "YouTube OAC",
        "https://support.amuse.io/en/articles/127174-youtube-official-artist-channel-oac",
      ],
    ],
  },
  {
    name: "RouteNote",
    model: "Free revenue share or Premium",
    facts: [
      [
        "Entry cost",
        "Free tier has no upfront fee; Premium starts at $10/single plus $9.99 annual renewal per release.",
      ],
      [
        "Release volume",
        "No account-wide cap stated; per release, up to 500 tracks and stated file-size limits apply.",
      ],
      [
        "Royalty model",
        "Free keeps 15% of net receipts; Premium claims 100% of streaming/download revenue. Payout conditions and threshold apply.",
      ],
      [
        "Network",
        "RouteNote lists partner services; counts are not directly comparable across distributors.",
      ],
      [
        "YouTube",
        "Topic delivery and an OAC application/facilitation path are described; approval is not automatic. Content ID is separate.",
      ],
    ],
    sources: [
      [
        "Costs",
        "https://support.routenote.com/kb-article/how-much-does-routenote-cost/",
      ],
      [
        "Free vs Premium",
        "https://support.routenote.com/kb-article/what-is-the-difference-between-free-premium-distribution/",
      ],
      [
        "YouTube OAC",
        "https://support.routenote.com/kb-article/routenote-oac-guide/",
      ],
    ],
  },
  {
    name: "ONErpm",
    model: "No upfront fee · revenue share",
    facts: [
      [
        "Entry cost",
        "Emerging self-service advertises no registration, annual or upload fee; terms use a revenue share.",
      ],
      [
        "Release volume",
        "Emerging advertises unlimited audio/video uploads; no numeric file quota was found in the pages reviewed.",
      ],
      [
        "Royalty model",
        "FAQ specifies artist shares of 85% for download stores, 70% for YouTube and 50% for other videos.",
      ],
      [
        "Network",
        "No directly comparable network total included in the reviewed pages.",
      ],
      [
        "YouTube",
        "YouTube revenue and a Content ID tracker are mentioned; OAC/Topic merge capability was not stated in pages reviewed.",
      ],
    ],
    sources: [
      ["How it works", "https://onerpm.com/how-it-works/"],
      ["FAQ", "https://onerpm.com/onerpm-answers-common-questions/"],
      ["Distribution", "https://onerpm.com/digital-distribution/"],
    ],
  },
] as const;

export default function DistributionComparison() {
  return (
    <section
      className="distribution-comparison content-width"
      id="compare"
      aria-labelledby="comparison-title"
    >
      <div className="distribution-section-heading">
        <div>
          <span className="dist-eyebrow dist-eyebrow--red">
            TRANSPARENT BY DESIGN · REVIEWED 01 NOV 2026
          </span>
          <h2 id="comparison-title">Compare the model, not the hype.</h2>
        </div>
        <p>
          Public pricing and help pages differ in what they count. Compare the
          upfront model, release language, earnings basis and YouTube
          process—not headline percentages alone.
        </p>
      </div>
      <div className="distribution-comparison__grid">
        {comparisons.map(provider => (
          <article
            className={`distribution-comparison__card${"featured" in provider && provider.featured ? " distribution-comparison__card--montyx" : ""}`}
            key={provider.name}
          >
            <header className="distribution-comparison__card-head">
              <div>
                <span className="distribution-comparison__model">
                  {provider.model}
                </span>
                <h3>{provider.name}</h3>
              </div>
              {"featured" in provider && provider.featured ? (
                <span className="distribution-comparison__current">
                  THIS OFFER
                </span>
              ) : null}
            </header>
            <dl className="distribution-comparison__facts">
              {provider.facts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div
              className="distribution-comparison__sources"
              aria-label={`${provider.name} official sources`}
            >
              {provider.sources.map(([label, href]) => (
                <a href={href} key={href} target="_blank" rel="noreferrer">
                  {label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
      <p className="distribution-comparison__disclaimer">
        Source access date: 1 November 2026. Prices shown are public US-page
        prices where specified, in USD unless marked otherwise; regions, taxes,
        add-ons and terms vary and can change. “Unlimited” describes provider
        plan language, not unrestricted storage, acceptance or delivery. A
        platform count does not guarantee delivery of any particular release to
        every service or territory. Figures are source-attributed, not an
        endorsement or legal/financial advice. MONTYX’s artist-facing split must
        be confirmed in its own current terms.
      </p>
    </section>
  );
}
