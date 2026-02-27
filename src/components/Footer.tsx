"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* Column 1 */}
            <div>
              <Image
                src="/logo.png"
                alt="Store Transform"
                width={180}
                height={60}
                className={styles.logo}
              />
              <p className={styles.description}>
                Transforming businesses with innovative, AI-powered IT solutions
                development, design, and marketing. Our expertise drives growth,
                enhances user experiences, and fosters seamless technological
                integration, all to deliver real, measurable success.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3>Our Services</h3>
              <ul className={styles.list}>
                <li className={styles.li}>WordPress Development</li>
                <li className={styles.li}>Shopify Development</li>
                <li className={styles.li}>Magento Development</li>
                <li className={styles.li}>Digital Marketing</li>
                <li className={styles.li}>SEO Services</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3>Contact us</h3>
              <p>hr@storetransform.com</p>
              <p>+91 95120 39025</p>

              <h4 className={styles.follow}>Follow us</h4>
              <div className={styles.social}>
                <span>in</span>
                <span>ig</span>
                <span>tw</span>
                <span>fb</span>
                <span>pt</span>
                <span>yt</span>
              </div>
            </div>

            {/* Column 4 */}
            <div>
              <h3>Address</h3>

              <h4 className={styles.office}>India Office</h4>
              <p>
                408 4th Floor, Lilamani Corporate Heights, Opp Ramapir Tekro
                BRTS Stop, Nava Vadaj, Ahmedabad – 380013 Gujarat, India.
              </p>

              <h4 className={styles.office}>Canada Office</h4>
              <p>
                10 Baffin Crescent, Brampton ON L7A 4K6, Canada
              </p>
            </div>

          </div>
        </div>

        <div className={styles.bottom}>
          Copyright 2026 © Store Transform. All rights Reserved
        </div>
      </div>
    </footer>
  );
}