import HeroSection from "../pages/Hero";
import ServicesSection from "../pages/Service";
import ProductShowcase from "../components/Product";
import AboutUsSection from "../pages/AboutUs";
import ContactUsSection from "../pages/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ProductShowcase />
      <ContactUsSection />
    </>
  );
}
