import styles from "./StatsSection.module.css";

const stats = [
  { value: "13", label: "Years of Experience" },
  { value: "52", label: "Team Members" },
  { value: "32", label: "Countries Served" },
  { value: "1358", label: "Projects Delivered" },
];

const StatsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Numbers Speak for Themselves!</h2>
        <p className={styles.subtitle}>
          With a proven track record and a team of experts, we are the architects of your
          digital success. We harness the power of AI to supercharge our services, helping
          businesses achieve unprecedented growth—and now it’s your turn to witness the magic.
        </p>
        <div className={styles.bar}>
          <div className={styles.row}>
            {stats.map((s) => (
              <div key={s.label} className={styles.item}>
                <div className={styles.number}>
                  {s.value}
                  <span className={styles.plus}>+</span>
                </div>
                <div className={styles.label}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <a href="#contact" className={styles.cta}>Contact Us</a>
      </div>
    </section>
  );
};

export default StatsSection;
