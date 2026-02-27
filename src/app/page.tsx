import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TransformSection from "@/components/TransformSection";
import ServicesSection from "@/components/ServicesSection";
import HireExpertsSection from "@/components/HireExpertsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import StatsSection from "@/components/StatsSection";
import OurWorkSection from "@/components/OurWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogsSection from "@/components/BlogsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TransformSection />
      <ServicesSection />
      <HireExpertsSection />
      <WhyChooseSection />
      <StatsSection />
      <OurWorkSection />
      <TestimonialsSection />
      <BlogsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
