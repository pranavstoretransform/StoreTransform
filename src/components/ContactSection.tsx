"use client";

import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Contact Us</h2>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.twoCol}>
              <div className={styles.field}>
                <input placeholder="Enter Your Name" />
              </div>
              <div className={styles.field}>
                <input placeholder="Enter Your Email" />
              </div>
            </div>
            <div className={styles.twoCol}>
              <div className={`${styles.field} ${styles.phoneField}`}>
                <span className={styles.prefix}>
                  <span className={styles.flag}>🇺🇸</span> +1 ▾
                </span>
                <input placeholder="Your Number" />
              </div>
              <div className={styles.field}>
                <input placeholder="Company Name" />
              </div>
            </div>
            <div className={styles.field}>
              <textarea placeholder="Brief About The Project*" />
            </div>
            <button className={styles.submit}>Submit Now</button>
          </form>
        </div>
        <div className={styles.right}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>
              Have a Project? Let's Connect Are you having a project in mind?
            </h3>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📞</span>
              <div className={styles.infoText}>9512039025</div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>✉️</span>
              <div className={styles.infoText}>hr@storetransform.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
