import styles from "./OurWorkSection.module.css";

const items = [
  {
    title: "Health & Wellness Chatbot",
    text:
      "Developed Echo AI, a custom AI‑powered chatbot that provides mental health consultation and peace. We leveraged AI to deliver empathetic, personalized conversations; the result is an increase in user engagement and improved mental wellness scores.",
    img: "/lp1.webp",
  },
  {
    title: "Aviation Consultancy Industry",
    text:
      "Led the WordPress development for Seven Collective, crafting a dynamic and responsive website that effectively showcases their consultancy services. Implemented SEO best practices and optimized site performance to drive growth.",
    img: "/lp2.webp",
  },
  {
    title: "Personal Care Industry",
    text:
      "Executed a comprehensive Shopify project for Better Man Labs, focusing on a user‑friendly online store. Implemented custom features and optimized the site for performance, resulting in enhanced customer engagement and increased sales.",
    img: "/lp3.webp",
  },
  {
    title: "Home Decor Industry",
    text:
      "Implemented comprehensive SEO strategies for Superior Brand’s site. Conducted research and technical optimizations, resulting in a significant boost in organic traffic and improved search visibility.",
    img: "/lp4.webp",
  },
];

const OurWorkSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Work</h2>
          <p className={styles.subtitle}>
            We transform innovative ideas into powerful digital realities. Explore our work to see how
            we’ve helped businesses achieve their vision through our work.
          </p>
        </div>
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.thumb}>
                <img src={item.img} alt={item.title} />
              </div>
              <div className={styles.body}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
