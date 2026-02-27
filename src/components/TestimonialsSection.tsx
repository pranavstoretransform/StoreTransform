import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    quote:
      "Store Transform is an excellent development team. They are extremely creative with a great technical sensibility. They clearly understood our business goals and delivered a beautiful Magento experience.",
    author: "Robinson Walker",
  },
  {
    quote:
      "One of the best experiences I had with any Magento team. Highly dedicated professionals committed to delivering the highest standards of service.",
    author: "Sebastian Clarke",
  },
  {
    quote:
      "They took our Magento project to the next level with clever design and on‑point creativity. I will look forward to working with them on future projects.",
    author: "Garcia Taylor",
  },
];

const TestimonialsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Our happy clients are our greatest advocates – hear how we’ve transformed their success stories.
          </p>
        </div>
      </div>
      <div className={styles.wrap}>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>{t.author}</div>
            </div>
          ))}
        </div>
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.dotActive}`} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
