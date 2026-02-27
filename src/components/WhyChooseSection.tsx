import styles from "./WhyChooseSection.module.css";

const badges = [
  { alt: "Upwork", src: "/wc6.png" },
  { alt: "Magento", src: "/wc5.png" },
  { alt: "WordPress", src: "/wc4.png" },
  { alt: "Google Marketing Expert", src: "/wc3.png" },
  { alt: "WooCommerce", src: "/wc2.png" },
  { alt: "Shopify Expert", src: "/wc1.png" },
];

const WhyChooseSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            Why Choose <span>Store Transform?</span>
          </h2>
          <p>
            We’re your all-in-one business partner, offering a complete suite of services from
            design to development and marketing with the power of AI. We eliminate the hassle of
            juggling multiple agencies by providing a 360-degree solution under one roof.
          </p>
          <p>
            Our team of experts is dedicated to a results-driven approach. We leverage AI-powered
            services to enhance our strategies, creating smarter campaigns and more personalized
            user experiences. By partnering with us, you gain a team committed to your vision.
          </p>
          <p>
            We focus on helping you achieve business goals, ensuring our partnership is a strategic
            advantage for your business. Let us handle the complexities so you can focus on what
            you do best: running your business.
          </p>
        </div>
        <div className={styles.right}>
          {badges.map((b) => (
            <div key={b.alt} className={styles.badge}>
              <img src={b.src} alt={b.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
