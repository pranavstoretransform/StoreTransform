// src/components/TransformSection.tsx
import styles from "./TransformSection.module.css";

const TransformSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Content */}
        <div className={styles.left}>
          <h2>
            Transform Your Business with.. <br />
            <span>Our Tailored Services</span>
          </h2>

          <p>
            We help you innovate, scale, and grow through strategic digital
            solutions. Our team ensures your business stands out with cutting-edge
            technology and customer-first design.
          </p>

          <p>
            With years of experience working with industry leaders, we build AI-driven,
            performance-optimized digital experiences that solve real problems.
          </p>
        </div>

        {/* Right Image */}
        <div className={styles.right}>
          <img src="/t1.webp" alt="Transform Services" />
        </div>

      </div>
    </section>
  );
};

export default TransformSection;
