import styles from "./Departments.module.css";

const depts = [
  { icon: "🫀", name: "Cardiology", desc: "Cath labs, echo suites, and cardiac ICU." },
  { icon: "🧠", name: "Neurology & Neurosurgery", desc: "Comprehensive stroke and epilepsy care." },
  { icon: "🩻", name: "Orthopaedics", desc: "Joint replacement and sports medicine." },
  { icon: "🦷", name: "Dental Sciences", desc: "Full-service dental hospital integrated with academics." },
  { icon: "👁️", name: "Ophthalmology", desc: "Cataract, retina, and cornea specialists." },
  { icon: "🔬", name: "Pathology & Lab Medicine", desc: "NaBL-accredited labs with automated diagnostics." },
  { icon: "🤰", name: "Obstetrics & Gynaecology", desc: "High-risk pregnancy and foetal medicine." },
  { icon: "👶", name: "Paediatrics", desc: "Neonatology, PICU, and developmental care." },
  { icon: "🩸", name: "Oncology", desc: "Medical, surgical, and radiation oncology units." },
  { icon: "💊", name: "General Medicine", desc: "Internal medicine with 400+ general beds." },
  { icon: "🧬", name: "Biochemistry & Genetics", desc: "Research-active department with molecular diagnostics." },
  { icon: "🏃", name: "Physical Medicine", desc: "Rehabilitation and physiotherapy centre." },
];

export default function Departments() {
  return (
    <section
      className={styles.departments}
      id="departments"
      aria-labelledby="dept-heading"
    >
      <div className={`${styles.header} reveal`}>
        <div>
          <p className="section-label section-label--light">Departments</p>
          <h2 className="section-heading section-heading--light" id="dept-heading">
            Expertise across <strong>every discipline.</strong>
          </h2>
          <p className="section-intro section-intro--light">
            42 speciality and super-speciality departments, each staffed by
            full-time clinician-educators committed to both patient care and teaching.
          </p>
        </div>
        <a href="#" className="btn btn--ghost">
          View all departments
        </a>
      </div>

      <div className={`${styles.grid} reveal`}>
        {depts.map((d) => (
          <a key={d.name} href="#" className={styles.card} aria-label={d.name}>
            <div className={styles.cardIcon}>{d.icon}</div>
            <h3 className={styles.cardName}>{d.name}</h3>
            <p className={styles.cardDesc}>{d.desc}</p>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
