import styles from "./TransformSection.module.css";

const TransformSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Content */}
        <div className={styles.left}>
          <h2>
            Transform Your Business with.. <br />
            <span className={styles.highlight}>Our Tailored Services</span>
          </h2>

          <p>
            At Store Transform, we provide more than just digital services—we provide a
            competitive edge through the power of AI. We are a leading provider of AI-powered
            360-degree digital solutions, from web design and development to marketing. By
            integrating AI into every aspect of our work, we deliver tailored strategies that are
            not only built to meet your unique needs but are also optimized for maximum performance.
          </p>

          <p>
            With years of experience working with leading brands, our holistic, AI-driven
            approach creates impactful online presences that drive sales and enhance brand
            visibility with unmatched efficiency. From stunning AI-optimized website designs to
            comprehensive AI marketing strategies that predict trends, we provide everything
            you need to succeed.
          </p>
        </div>

        {/* Right Image */}
        <div className={styles.right}>
          {/* Note: In your CSS, you used a grid but the image is a single src. 
              I am keeping your structure but ensuring the image behaves. */}
          <img src="/t1.webp" alt="Transform Services" className={styles.mainImg} />
        </div>

      </div>
    </section>
  );
};

export default TransformSection;