import Image from "next/image";
import styles from "./Footer.module.css";

const cols = [
  {
    heading: "Institution",
    links: ["About AIMS", "Leadership", "Faculty Directory", "Rankings & Recognition", "Annual Report"],
  },
  {
    heading: "Academics",
    links: ["MBBS Programme", "MD / MS Seats", "Nursing College", "Allied Health Sciences", "Academic Calendar"],
  },
  {
    heading: "Hospital & Patient Care",
    links: ["Book Appointment", "Find a Doctor", "OPD Timings", "Emergency: 1800-XXX-XXXX", "Patient Feedback"],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} aria-labelledby="footer-brand">
      <div className={styles.top}>
        <div className={styles.brand}>
          <Image
            src="/logo.png"
            alt="AIMS logo"
            width={160}
            height={50}
            loading="lazy"
            className={styles.logo}
          />
          <p className={styles.brandDesc}>
            Arundathi Institute of Medical Sciences is a full-spectrum academic
            medical institution in Telangana, committed to shaping compassionate
            and capable physicians.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.heading} className={styles.col}>
            <h4 className={styles.colHead}>{c.heading}</h4>
            <ul role="list" className={styles.colList}>
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className={styles.colLink}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <span>© 2024 Arundathi Institute of Medical Sciences. All rights reserved.</span>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Grievance</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
