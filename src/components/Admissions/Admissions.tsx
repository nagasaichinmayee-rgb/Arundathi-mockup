import styles from "./Admissions.module.css";

const steps = [
  {
    num: "1",
    title: "Qualify NEET-UG",
    desc: "Appear in the National Eligibility cum Entrance Test. AIMS accepts scores from all categories under the Telangana State Counselling quota.",
  },
  {
    num: "2",
    title: "Participate in State Counselling",
    desc: "Register with Kaloji Narayana Rao University of Health Sciences (KNRUHS) for seat allotment. AIMS seats are listed under the management and government quota.",
  },
  {
    num: "3",
    title: "Document Verification",
    desc: "Submit original certificates at the AIMS admissions office within the stipulated window. Our team assists with every document requirement.",
  },
  {
    num: "4",
    title: "Confirm Your Seat",
    desc: "Pay the first installment and receive your joining letter. Orientation begins the first week of the academic year.",
  },
];

export default function Admissions() {
  return (
    <section className={styles.admissions} id="admissions" aria-labelledby="admissions-heading">
      <div className={styles.inner}>
        {/* Left: steps */}
        <div>
          <p className="section-label">Admissions</p>
          <h2 className={`section-heading reveal`} id="admissions-heading">
            Your path to <strong>MBBS</strong> starts here.
          </h2>
          <p className="section-intro reveal">
            Admission to AIMS is through NEET-UG. We guide every applicant through a
            transparent, fair process — from counselling to joining.
          </p>
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={s.num} className={`${styles.step} reveal`}>
                <div className={styles.stepNum}>{s.num}</div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className={styles.stepLine} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: sticky cards */}
        <div className={`${styles.aside} reveal`}>
          <div className={styles.card}>
            <span className={styles.deadlineBadge}>⏱ Applications open 2024–25</span>
            <h3 className={styles.cardTitle}>MBBS Programme</h3>
            <p className={styles.cardDesc}>
              4.5 years of clinical training + 1 year internship. Recognised by NMC.
            </p>
            <a href="#" className="btn btn--primary" style={{ width: "100%", justifyContent: "center" }}>
              Begin Application
            </a>
          </div>

          <div className={styles.cardAlt}>
            <h3 className={styles.cardAltTitle}>MD / MS Programmes</h3>
            <p className={styles.cardAltDesc}>
              Postgraduate speciality seats across 20 disciplines. Allotted through
              NEET-PG and state counselling.
            </p>
            <a href="#" className="btn btn--teal">
              Explore PG Seats
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
