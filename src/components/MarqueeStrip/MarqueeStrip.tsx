import styles from "./MarqueeStrip.module.css";

const items = [
  "NMC Approved",
  "NAAC Accredited",
  "1200+ Bed Teaching Hospital",
  "42 Speciality Departments",
  "Ranked Among Top Medical Colleges",
  "Telangana, India",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
