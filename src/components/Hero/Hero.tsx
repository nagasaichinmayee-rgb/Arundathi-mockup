import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero — welcome">
      {/* Full-bleed video */}
      <div className={styles.videoWrap}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className={styles.video}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient scrim for legibility */}
      <div className={styles.scrim} aria-hidden="true" />

      {/* Main copy — bottom-left, editorial placement */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>Arundathi Institute of Medical Sciences</p>
        <h1 className={styles.headline}>
          Medicine rooted<br />
          in <em>purpose,</em><br />
          not just practice.
        </h1>
        <p className={styles.sub}>
          A medical institution built for the next generation of healers — where
          clinical rigour meets compassionate care, and every student is prepared
          to lead.
        </p>
        <div className={styles.actions}>
          <a href="#admissions" className="btn btn--primary">
            Explore Admissions
          </a>
          <a href="#discover" className="btn btn--ghost">
            Discover AIMS
          </a>
        </div>
      </div>

      {/* Floating stat chips */}
      <div className={styles.stats} aria-label="Key figures">
        <div className={styles.stat}>
          <span className={styles.statNum}>
            1200<span className={styles.statSup}>+</span>
          </span>
          <span className={styles.statLabel}>Beds</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>42</span>
          <span className={styles.statLabel}>Departments</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>
            98<span className={styles.statSup}>%</span>
          </span>
          <span className={styles.statLabel}>Pass Rate</span>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        Scroll
      </div>
    </section>
  );
}
