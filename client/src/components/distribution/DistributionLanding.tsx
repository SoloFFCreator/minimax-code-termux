import { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import {
  siApplemusic,
  siAudiomack,
  siDeezer,
  siFacebook,
  siIheartradio,
  siInstagram,
  siNeteasecloudmusic,
  siPandora,
  siShazam,
  siSoundcloud,
  siSpotify,
  siTidal,
  siTiktok,
  siYoutubemusic,
} from "simple-icons";
import DistributionComparison from "./DistributionComparison";
import YouTubeGuide from "./YouTubeGuide";
import "./DistributionLanding.css";

const SignalOrbit = lazy(() => import("./SignalOrbit"));
const ARTIST_PORTAL_URL = "https://user.montyxlabel.cyou/login";

const platforms = [
  { name: "Spotify", type: "icon", icon: siSpotify },
  { name: "Apple Music", type: "icon", icon: siApplemusic },
  { name: "YouTube Music", type: "icon", icon: siYoutubemusic },
  {
    name: "Amazon Music",
    type: "image",
    image: "/images/platforms/amazon-music.svg",
    imageClass: "distribution-platform__asset--amazon",
  },
  {
    name: "Boomplay",
    type: "image",
    image: "/images/platforms/boomplay-dark.png",
    imageClass: "distribution-platform__asset--boomplay",
  },
  {
    name: "JioSaavn",
    type: "image",
    image: "/images/platforms/jiosaavn-white.png",
    imageClass: "distribution-platform__asset--jiosaavn",
  },
  { name: "Deezer", type: "icon", icon: siDeezer },
  { name: "TIDAL", type: "icon", icon: siTidal },
  { name: "SoundCloud", type: "icon", icon: siSoundcloud },
  { name: "Audiomack", type: "icon", icon: siAudiomack },
  { name: "Pandora", type: "icon", icon: siPandora },
  { name: "iHeartRadio", type: "icon", icon: siIheartradio },
  { name: "TikTok", type: "icon", icon: siTiktok },
  { name: "Instagram", type: "icon", icon: siInstagram },
  { name: "Facebook", type: "icon", icon: siFacebook },
  { name: "Shazam", type: "icon", icon: siShazam },
  { name: "NetEase Cloud Music", type: "icon", icon: siNeteasecloudmusic },
] as const;

const questions = [
  {
    question: "How much does MONTYX distribution cost?",
    answer:
      "MONTYX currently offers free account access and no stated release-count cap. S-Music’s public white-label page separately states that it retains 20% of gross royalties for its service. The exact amount payable to an artist depends on MONTYX’s own current terms, so confirm the split before submitting.",
  },
  {
    question: "Where can a release be delivered?",
    answer:
      "S-Music publicly claims a network of 375+ audio DSPs and 125+ video platforms. This is an upstream network claim—not a promise that every release, account or territory can use every service. Selected stores, release eligibility, territory and platform review can affect delivery. S-Music’s public page currently excludes Beatport and Traxsource for third-party white-label users.",
  },
  {
    question: "Can my YouTube Topic channel merge with my personal channel?",
    answer:
      "An eligible artist may request an Official Artist Channel. YouTube controls eligibility, approval and how its channels are consolidated. S-Music publicly advertises OAC/Topic support, but its public explanation does not establish an automatic or guaranteed personal-to-Topic merge. Ask through the portal about the current request path for your channel.",
  },
  {
    question: "Is YouTube Content ID included with every release?",
    answer:
      "No. YouTube Music delivery, Topic/Art Track creation, OAC requests and Content ID are distinct. Content ID is for eligible recordings and requires appropriate exclusive rights. The portal’s current Content ID guide excludes AI-generated or AI-assisted musical elements and sets out additional rights criteria.",
  },
  {
    question: "Do artists keep ownership of their masters?",
    answer:
      "Artists retain master ownership unless a separate written agreement says otherwise. A distribution request, platform delivery, or label credit does not by itself transfer ownership.",
  },
  {
    question: "How do I create an account and submit a release?",
    answer:
      "Use Get Started to open the existing artist portal at user.montyxlabel.cyou/login. That portal handles its own sign-in and account creation. Follow its current upload, metadata, rights and review requirements; this marketing site does not store release masters.",
  },
  {
    question: "Are the streaming logos endorsements?",
    answer:
      "No. The service marks identify selected destinations only. They belong to their respective owners and do not imply sponsorship, certification or endorsement of MONTYX.",
  },
];

function DeferredSignal() {
  const prefersReducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion !== false) return;
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
        deviceMemory?: number;
      }
    ).connection;
    const device = navigator as Navigator & { deviceMemory?: number };
    const smallOrTouch = window.matchMedia(
      "(max-width: 650px), (pointer: coarse)"
    ).matches;
    const constrained =
      smallOrTouch ||
      connection?.saveData === true ||
      ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? "") ||
      (device.deviceMemory !== undefined && device.deviceMemory <= 4) ||
      (navigator.hardwareConcurrency !== undefined &&
        navigator.hardwareConcurrency <= 4);
    if (constrained) return;
    const timer = window.setTimeout(() => setReady(true), 500);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  if (!ready || prefersReducedMotion) return null;
  return (
    <Suspense fallback={null}>
      <SignalOrbit />
    </Suspense>
  );
}

export default function DistributionLanding() {
  const reducedMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="distribution-landing">
      <section
        className="distribution-hero"
        aria-labelledby="distribution-title"
      >
        <div className="distribution-hero__art" aria-hidden="true">
          <img
            src="/images/montyx-distribution-hero.webp"
            alt=""
            fetchPriority="high"
          />
          <div className="distribution-hero__shade" />
          <DeferredSignal />
        </div>
        <div className="distribution-hero__content content-width">
          <motion.div
            className="distribution-hero__copy"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: [0.2, 0.7, 0.25, 1] }}
          >
            <span className="dist-eyebrow">
              <span className="dist-live-dot" /> MUSIC DISTRIBUTION · NEPAL
            </span>
            <h1 id="distribution-title">
              Your music.
              <br />
              <span>Going further.</span>
            </h1>
            <p className="distribution-hero__lede">
              Independent, artist-first distribution from Nepal. Create your
              account in the MONTYX artist portal and submit your next release.
            </p>
            <div className="distribution-hero__actions">
              <a
                href={ARTIST_PORTAL_URL}
                className="dist-button dist-button--primary"
              >
                Get Started <span aria-hidden="true">↗</span>
              </a>
              <a href="#compare" className="dist-button dist-button--quiet">
                Compare platforms <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="distribution-hero__meta">
              <span>Free MONTYX access</span>
              <span>No release-count cap stated</span>
              <span>Artist masters stay yours</span>
            </div>
          </motion.div>
          <div className="distribution-hero__visual-label" aria-hidden="true">
            <span>RELEASE SIGNAL / 01</span>
            <span>INDEPENDENT SOUND · NEPAL</span>
          </div>
        </div>
        <a className="distribution-hero__scroll" href="#offer">
          <span>See the offer</span>
          <span className="distribution-hero__scroll-line" aria-hidden="true" />
        </a>
      </section>

      <section className="distribution-offer content-width" id="offer">
        <article>
          <span className="distribution-offer__value">FREE</span>
          <h2>Start without an upfront distribution fee.</h2>
          <p>MONTYX’s current artist-facing offer.</p>
        </article>
        <article>
          <span className="distribution-offer__value">NO CAP</span>
          <h2>No stated release-count limit.</h2>
          <p>All submissions still go through partner and DSP review.</p>
        </article>
        <article>
          <span className="distribution-offer__value">375+ / 125+</span>
          <h2>Audio and video network claim.</h2>
          <p>
            S-Music’s public count; availability varies by service and
            territory.
          </p>
        </article>
      </section>

      <section
        className="distribution-network content-width"
        id="platforms"
        aria-labelledby="platforms-title"
      >
        <div className="distribution-section-heading">
          <div>
            <span className="dist-eyebrow dist-eyebrow--red">
              SELECTED DESTINATION MARKS
            </span>
            <h2 id="platforms-title">More places for your sound.</h2>
          </div>
          <p>
            These actual service marks are selected examples—not an exhaustive
            or per-release delivery list. Distribution runs through MONTYX’s
            S-Music white-label provider; destination, territory and release
            eligibility can vary.
          </p>
        </div>
        <div className="distribution-platform-grid">
          {platforms.map(platform => (
            <div className="distribution-platform" key={platform.name}>
              <span
                className={`distribution-platform__mark${platform.type === "image" ? " distribution-platform__mark--image" : ""}`}
                aria-hidden="true"
              >
                {platform.type === "icon" ? (
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path
                      d={platform.icon.path}
                      fill={`#${platform.icon.hex}`}
                    />
                  </svg>
                ) : (
                  <img
                    className={platform.imageClass}
                    src={platform.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </span>
              <span className="distribution-platform__name">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
        <p className="distribution-network__fineprint">
          S-Music’s current public white-label page says Beatport and Traxsource
          are not available to third-party users. The upstream network count is
          not a guarantee that each release will reach every destination or
          market. Third-party marks identify services only and do not indicate
          endorsement or certification.
        </p>
      </section>

      <DistributionComparison />
      <YouTubeGuide />

      <section className="distribution-process" id="process">
        <div className="content-width">
          <div className="distribution-section-heading distribution-section-heading--process">
            <div>
              <span className="dist-eyebrow dist-eyebrow--red">
                A CLEAR RELEASE PATH
              </span>
              <h2>From your portal to the right destinations.</h2>
            </div>
            <p>
              Account creation and release submissions happen in the existing
              artist portal. Each release remains subject to rights review,
              metadata checks, partner acceptance and individual store rules.
            </p>
          </div>
          <div className="distribution-steps">
            <article className="distribution-step">
              <span className="distribution-step__index">01</span>
              <div className="distribution-step__rule" aria-hidden="true" />
              <h3>Create your account</h3>
              <p>
                Get Started opens the MONTYX artist portal, where its login page
                provides the account-creation option.
              </p>
              <a className="dist-text-link" href={ARTIST_PORTAL_URL}>
                Open the portal <span aria-hidden="true">↗</span>
              </a>
            </article>
            <article className="distribution-step">
              <span className="distribution-step__index">02</span>
              <div className="distribution-step__rule" aria-hidden="true" />
              <h3>Submit your release</h3>
              <p>
                Follow the portal’s current instructions for audio, artwork,
                credits, rights, release metadata and delivery choices.
              </p>
            </article>
            <article className="distribution-step">
              <span className="distribution-step__index">03</span>
              <div className="distribution-step__rule" aria-hidden="true" />
              <h3>Review and delivery</h3>
              <p>
                Accepted releases are prepared through the white-label partner.
                Store approval, timing and territorial availability are not
                guaranteed by a network count.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="distribution-artist content-width"
        id="about"
        aria-labelledby="artist-first-title"
      >
        <div className="distribution-artist__index" aria-hidden="true">
          <img
            src="/montyx-mark.png"
            alt=""
            width="180"
            height="180"
            loading="lazy"
            decoding="async"
          />
          <span>NEPAL · INDEPENDENT</span>
        </div>
        <div className="distribution-artist__copy">
          <span className="dist-eyebrow dist-eyebrow--red">
            ARTIST-FIRST, ALWAYS
          </span>
          <h2 id="artist-first-title">Keep your masters yours.</h2>
          <p>
            Artists retain master ownership unless a separate written agreement
            says otherwise. A distribution request or label credit does not, by
            itself, transfer the rights to your recording.
          </p>
          <Link href="/rights" className="dist-text-link">
            Read the rights approach <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="distribution-artist__stamp" aria-hidden="true">
          <span>INDEPENDENT</span>
          <span>BY DESIGN</span>
          <i />
        </div>
      </section>

      <section className="distribution-faq content-width" id="faq">
        <div className="distribution-faq__intro">
          <span className="dist-eyebrow dist-eyebrow--red">
            BEFORE THE RELEASE
          </span>
          <h2>
            Good questions.
            <br />
            Clear answers.
          </h2>
          <p>
            Check the current terms, delivery route and YouTube workflow before
            choosing a release date.
          </p>
          <a className="dist-text-link" href={ARTIST_PORTAL_URL}>
            Get Started <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="distribution-faq__list">
          {questions.map((item, index) => (
            <details
              className="distribution-faq__item"
              key={item.question}
              open={openFaq === index}
              onToggle={event => {
                const isOpen = (event.currentTarget as HTMLDetailsElement).open;
                if (isOpen) setOpenFaq(index);
                else if (openFaq === index) setOpenFaq(null);
              }}
            >
              <summary>
                <span>{item.question}</span>
                <span className="distribution-faq__toggle" aria-hidden="true">
                  {openFaq === index ? "−" : "+"}
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="distribution-contact" id="contact-cta">
        <div className="content-width distribution-contact__inner">
          <div>
            <span className="dist-eyebrow">MONTYX RECORDS DISTRIBUTION</span>
            <h2>Ready to move your next release?</h2>
            <p>
              Create an artist account in the existing portal. Questions about
              rights, the current artist split or YouTube OAC requests? Contact
              the team before submitting.
            </p>
          </div>
          <div className="distribution-contact__actions">
            <a
              href={ARTIST_PORTAL_URL}
              className="dist-button dist-button--primary"
            >
              Get Started <span aria-hidden="true">↗</span>
            </a>
            <Link href="/contact" className="dist-button dist-button--quiet">
              Contact support <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <p className="distribution-trademark-note content-width">
        Provider counts and distribution terms above are attributed to the
        upstream provider and are not a guarantee of delivery, approval, timing
        or earnings. Streaming and social-service logos are trademarks of their
        respective owners; they identify services only and do not imply
        affiliation, endorsement or certification. MONTYX’s artist-facing
        royalty terms must be confirmed separately.
      </p>
    </main>
  );
}
