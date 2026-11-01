const topics = [
  {
    number: "01",
    title: "YouTube Music delivery",
    body: "A selected YouTube Music delivery can create Art Tracks and an automatically generated Topic channel. This is not the same as an artist-owned Official Artist Channel (OAC). Availability depends on the release, territory and partner delivery settings.",
  },
  {
    number: "02",
    title: "Official Artist Channel",
    body: "An eligible artist can request an OAC through a distributor. YouTube says an OAC brings together an artist’s Topic-channel subscribers and content with their existing artist presence (and Vevo, if available). YouTube reviews eligibility and controls the result; MONTYX cannot promise approval, timing or a particular merge outcome.",
  },
  {
    number: "03",
    title: "Content ID is separate",
    body: "Content ID matches eligible sound recordings in user-generated videos under a separate rights and claims workflow. A YouTube Music release does not automatically enroll a recording in Content ID. MONTYX’s portal eligibility notes require exclusive worldwide rights and exclude AI-generated or AI-assisted musical elements.",
  },
] as const;

export default function YouTubeGuide() {
  return (
    <section
      className="distribution-youtube content-width"
      id="youtube"
      aria-labelledby="youtube-title"
    >
      <div className="distribution-section-heading">
        <div>
          <span className="dist-eyebrow dist-eyebrow--red">
            TOPIC · OAC · CONTENT ID
          </span>
          <h2 id="youtube-title">Three YouTube tools. Three different jobs.</h2>
        </div>
        <p>
          S-Music publicly advertises YouTube OAC/Topic support. The public
          description does not specify a universal personal-to-Topic merge
          workflow, and the final OAC decision belongs to YouTube.
        </p>
      </div>
      <div className="distribution-youtube__grid">
        {topics.map(topic => (
          <article className="distribution-youtube__card" key={topic.number}>
            <span className="distribution-youtube__number">{topic.number}</span>
            <h3>{topic.title}</h3>
            <p>{topic.body}</p>
          </article>
        ))}
      </div>
      <div className="distribution-youtube__sources">
        <span>Check the current rules:</span>
        <a
          href="https://support.google.com/youtube/answer/7336634?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          YouTube OAC eligibility ↗
        </a>
        <a
          href="https://smusicdistribution.com/"
          target="_blank"
          rel="noreferrer"
        >
          S-Music partner statement ↗
        </a>
        <a
          href="https://user.montyxlabel.cyou/docs/content-id"
          target="_blank"
          rel="noreferrer"
        >
          Portal Content ID criteria ↗
        </a>
      </div>
    </section>
  );
}
