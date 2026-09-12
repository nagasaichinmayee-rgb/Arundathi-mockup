import styles from "./Accreditation.module.css";

const chips = ["NMC India", "NAAC", "KNRUHS", "MCI Approved", "ISO 9001:2015"];

export default function Accreditation() {
  return (
    <div className={`${styles.bar} reveal`} aria-label="Accreditations and recognitions">
      <span className={styles.label}>Recognised by</span>
      <div className={styles.chips}>
        {chips.map((c) => (
          <span key={c} className={styles.chip}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
