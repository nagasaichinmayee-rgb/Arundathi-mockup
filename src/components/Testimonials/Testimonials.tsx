import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "The clinical exposure from day one sets AIMS apart. By my third year I'd assisted in over 200 surgeries. That's not common at other institutions.",
    name: "Dr. Reshma Nair",
    role: "MS — General Surgery, Batch 2019",
    initials: "RN",
  },
  {
    quote:
      "I came from a small town in Andhra. The mentorship programme made sure I never felt lost. My faculty mentor still answers my calls years after I graduated.",
    name: "Dr. Suresh Kumar",
    role: "MBBS — Batch 2020",
    initials: "SK",
  },
  {
    quote:
      "The simulation lab prepared me for my postgraduate exams better than any textbook. AIMS built me into the cardiologist I am today.",
    name: "Dr. Ananya Prasad",
    role: "DM — Cardiology, Batch 2018",
    initials: "AP",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials} aria-labelledby="test-heading">
      <p className="section-label">From Our Community</p>
      <h2 className="section-heading reveal" id="test-heading">
        Voices of <strong>AIMS.</strong>
      </h2>
      <div className={styles.grid}>
        {testimonials.map((t) => (
          <div key={t.name} className={`${styles.card} reveal`}>
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
