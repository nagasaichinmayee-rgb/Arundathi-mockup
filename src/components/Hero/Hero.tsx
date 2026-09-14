"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
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

      <div className={styles.scrim} aria-hidden="true" />

      {/* Search bar */}
      <div className={styles.searchWrap}>
        <div className={styles.search}>
          <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="6.5" stroke="rgba(255,255,255,.55)" strokeWidth="1.8" />
            <path d="M14 14l3.5 3.5" stroke="rgba(255,255,255,.55)" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search For Doctors, Specialities And Health Check Packages..."
            aria-label="Search"
            className={styles.searchInput}
          />
          <button className={styles.searchBtn} aria-label="Search">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6.5" stroke="white" strokeWidth="1.8" />
              <path d="M14 14l3.5 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* 4 action strips */}
      <div className={styles.actions}>
        {[
          "Book Appointment",
          "Find Department",
          "Book Health Checkup",
          "Get Expert Opinion",
        ].map((label) => (
          <button key={label} className={styles.actionBtn}>
            <span>{label}</span>
            <span className={styles.actionCircle}>→</span>
          </button>
        ))}
      </div>
    </section>
  );
}
