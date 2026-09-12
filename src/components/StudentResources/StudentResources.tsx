import styles from "./StudentResources.module.css";

const resources = [
  {
    icon: "📚",
    tag: "Library",
    title: "Medical Digital Library",
    desc: "Access to PubMed, UpToDate, and our 40,000-volume physical collection — open 18 hours a day.",
    link: "Access library",
  },
  {
    icon: "🏠",
    tag: "Hostel",
    title: "On-Campus Accommodation",
    desc: "Separate, fully-equipped hostels for men and women within the campus — minutes from the hospital.",
    link: "View facilities",
  },
  {
    icon: "🩺",
    tag: "Clinical Skills",
    title: "Simulation & Skills Lab",
    desc: "High-fidelity simulators, anatomical models, and task trainers let you practice before the ward.",
    link: "Explore the lab",
  },
  {
    icon: "🏋️",
    tag: "Wellness",
    title: "Sports & Student Wellness",
    desc: "Cricket, badminton, and fitness facilities — because physician health matters as much as patient health.",
    link: "See sports",
  },
  {
    icon: "🔬",
    tag: "Research",
    title: "Student Research Programme",
    desc: "Join an active research cell from your second year. Publish, present, and build your academic profile early.",
    link: "Join a cell",
  },
  {
    icon: "🤝",
    tag: "Mentorship",
    title: "Faculty Mentorship",
    desc: "Every student is assigned a faculty mentor through all five years — a consistent clinical and career guide.",
    link: "Meet our faculty",
  },
];

export default function StudentResources() {
  return (
    <section className={styles.resources} id="resources" aria-labelledby="resources-heading">
      <p className="section-label">Student Resources</p>
      <h2 className={`section-heading reveal`} id="resources-heading">
        Everything you need to <strong>thrive.</strong>
      </h2>
      <p className="section-intro reveal">
        Life at AIMS is designed around your growth — clinical, academic, and personal.
      </p>
      <div className={styles.grid}>
        {resources.map((r) => (
          <article key={r.title} className={`${styles.card} reveal`}>
            <div className={styles.cardImg}>{r.icon}</div>
            <div className={styles.cardBody}>
              <span className={styles.cardTag}>{r.tag}</span>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
              <a href="#" className={styles.cardLink}>
                {r.link} →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
