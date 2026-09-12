import Image from "next/image";
import styles from "./About.module.css";

const pillars = [
  { icon: "🏥", title: "Clinical Training", desc: "Day-one ward exposure in our 1200-bed teaching hospital." },
  { icon: "🔬", title: "Research", desc: "Active research cells across oncology, cardiology, and public health." },
  { icon: "🌍", title: "Community Reach", desc: "Mobile health units serving 40+ rural villages every year." },
  { icon: "🎓", title: "Faculty", desc: "Led by clinician-educators with active national fellowships." },
];

export default function About() {
  return (
    <section className={styles.about} id="discover" aria-labelledby="about-heading">
      <div className={styles.inner}>
        <div className={`${styles.imgWrap} reveal`}>
          <Image
            src="/about.jpg"
            alt="AIMS campus and clinical environment"
            fill
            className={styles.img}
            loading="lazy"
          />
          <div className={styles.badge}>
            <strong>Est. 2005</strong>
            Two decades of medical excellence
          </div>
        </div>

        <div className="reveal">
          <p className="section-label">Discover AIMS</p>
          <h2 className="section-heading" id="about-heading">
            Where knowledge meets <strong>the bedside.</strong>
          </h2>
          <p className="section-intro">
            Arundathi Institute of Medical Sciences is a full-spectrum academic
            medical centre. We train students in real wards, operating theatres,
            and communities — not just classrooms. Our philosophy is simple:
            understanding follows doing.
          </p>
          <div className={styles.pillars}>
            {pillars.map((p) => (
              <div key={p.title} className={styles.pillar}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
