import styles from "./BlogsSection.module.css";

const posts = [
  { title: "PPC Advertising in 2026: Run High-ROI PPC Campaigns to Reduce Costs and...", img: "/blog1.png", date: "January 25, 2026" },
  { title: "AI in Marketing: AEO, GEO, SXO", img: "/wc4.png", date: "December 23, 2025" },
  { title: "The Complete Shopify Website Development Guide for 2026: AI, SEO & High-Converting Ecommerce Stores", img: "/blog3.png", date: "November 28, 2025", highlight: true },  
];

const BlogsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Blogs</h2>
          <p className={styles.subtitle}>
            Explore our blog for innovative digital ideas and strategies to elevate your website and fuel your growth!
          </p>
        </div>
        <div className={styles.grid}>
          {posts.map((p) => (
            <article key={p.title} className={styles.card}>
              <img className={styles.image} src={p.img} alt={p.title} />
              <div className={styles.meta}>{p.date}</div>
            </article>
          ))}
        </div>
        <a className={styles.cta} href="#">View All</a>
      </div>
    </section>
  );
};

export default BlogsSection;
