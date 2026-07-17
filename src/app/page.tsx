import HeroSection from "../pages/Hero";
import ServicesTeaser from "../pages/ServicesTeaser";
import ProductShowcase from "../components/Product";
import AboutUsSection from "../pages/AboutUs";
import ContactUsSection from "../pages/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesTeaser />
      <ProductShowcase />
      <ContactUsSection />
    </>
  );
}
