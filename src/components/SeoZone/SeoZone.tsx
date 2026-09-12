import styles from "./SeoZone.module.css";

const links = [
  "MBBS Admissions 2024",
  "MD Cardiology Seats",
  "OPD Timings",
  "Emergency Services",
  "Fee Structure",
  "Hostel Allotment",
  "Scholarship & Aid",
  "Research Publications",
  "Find a Doctor",
  "Campus Map",
  "NAAC Certificate",
  "Grievance Portal",
];

export default function SeoZone() {
  return (
    <section className={styles.zone} aria-labelledby="seo-heading">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading} id="seo-heading">
            Find what you&apos;re looking for
          </h2>
          <p className={styles.desc}>
            Whether you&apos;re a prospective student, a patient seeking specialist care,
            or a family member looking for guidance — AIMS has a resource for you.
          </p>
        </div>
        <nav className={styles.links} aria-label="Quick links">
          {links.map((l) => (
            <a key={l} href="#" className={styles.link}>
              {l}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
