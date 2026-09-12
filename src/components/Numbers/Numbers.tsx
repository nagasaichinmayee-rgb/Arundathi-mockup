import styles from "./Numbers.module.css";

const stats = [
  { val: "1200", sup: "+", label: "Hospital Beds" },
  { val: "42",   sup: "",  label: "Clinical Departments" },
  { val: "10k",  sup: "+", label: "Alumni Serving India" },
  { val: "98",   sup: "%", label: "MBBS Examination Pass Rate" },
];

export default function Numbers() {
  return (
    <div className={`${styles.numbers} reveal`} aria-label="Key statistics">
      <div className={styles.grid}>
        {stats.map((s) => (
          <div key={s.label} className={styles.item}>
            <div className={styles.val}>
              {s.val}
              {s.sup && <span className={styles.sup}>{s.sup}</span>}
            </div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
