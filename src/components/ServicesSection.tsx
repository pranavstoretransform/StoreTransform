import styles from "./ServicesSection.module.css";

type Service = {
  title: string;
  description: string;
  accent: "orange" | "black";
};

const services: Service[] = [
  {
    title: "IT Consultation",
    description:
      "Navigate the complex world of technology with our expert guidance. We help you create a clear, future-proof strategy that aligns with your business goals.",
    accent: "orange",
  },
  {
    title: "Ai-Powered Services",
    description:
      "Gain a competitive advantage with intelligent solutions. We leverage artificial intelligence to automate processes and turn your data into actionable insights.",
    accent: "black",
  },
  {
    title: "Web Development",
    description:
      "Build a powerful and secure digital presence from the ground up. Our custom websites are designed for peak performance and seamless user engagement.",
    accent: "orange",
  },
  {
    title: "Digital Marketing",
    description:
      "Amplify your brand and reach your audience in the digital space. We create data-driven strategies to boost your visibility and business growth.",
    accent: "black",
  },
  {
    title: "App Development",
    description:
      "Bring your innovative ideas to life on mobile devices. We design and build custom applications for iOS and Android that are intuitive and highly functional.",
    accent: "orange",
  },
  {
    title: "Ui Ux Design",
    description:
      "Create a user-centric experience that is both beautiful and effective. We design captivating interfaces and smooth user journeys to drive conversion and loyalty.",
    accent: "black",
  },
];

const ServicesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Services We Provide</h2>
          <p className={styles.subtitle}>
            Ready to turn your vision into a reality? Explore our core services and
            see how we can help you innovate.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.card} ${
                item.accent === "black" ? styles.accentBlack : styles.accentOrange
              }`}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#" className={styles.readMore}>
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
