import styles from "./HireExpertsSection.module.css";

type Expert = { label: string; color: string; initials: string };

const experts: Expert[] = [
  { label: "AI Expert", color: "#ff2e63", initials: "AI" },
  { label: "WordPress Expert", color: "#21759b", initials: "W" },
  { label: "Shopify Expert", color: "#95bf47", initials: "S" },
  { label: "Magento Expert", color: "#f26322", initials: "M" },
  { label: "SEO Expert", color: "#ff9f43", initials: "SEO" },
  { label: "PPC Expert", color: "#6b5f2e", initials: "PPC" },
];

const HireExpertsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hire Our Experts</h2>
        <p className={styles.subtitle}>
          Our team is a collective of specialized minds, each a leader in their field.
          We bring deep knowledge and proven expertise to every project, ensuring your success.
        </p>
        <div className={styles.pills}>
          {experts.map((e) => (
            <div key={e.label} className={styles.pill}>
              <div className={styles.icon} style={{ backgroundColor: e.color }}>
                {e.initials}
              </div>
              <span className={styles.label}>{e.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireExpertsSection;
