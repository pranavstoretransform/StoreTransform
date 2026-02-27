// src/components/Hero.tsx
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      
      {/* Background GIF */}
      <img
        src="/hero-bg.gif"
        alt="Background"
        className={styles.background}
      />

      {/* Dark Overlay */}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <p className={styles.welcome}>
            Welcome to Store Transform
          </p>

          <h1 className={styles.heading}>
            Driving Innovation with <br />
            <span>Agile AI-Enhanced</span> Digital Solutions
          </h1>

          <p className={styles.subtext}>
            Unleash Your Brand’s Full Potential with{" "}
            <span>360° Services All Under One Roof</span> – Let’s Soar to New Heights Together
          </p>

          <button className={styles.button}>
            Get Instant Assistance
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;