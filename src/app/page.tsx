import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import MarqueeStrip from "@/components/MarqueeStrip/MarqueeStrip";
import About from "@/components/About/About";
import Numbers from "@/components/Numbers/Numbers";
import Departments from "@/components/Departments/Departments";
import Admissions from "@/components/Admissions/Admissions";
import StudentResources from "@/components/StudentResources/StudentResources";
import Testimonials from "@/components/Testimonials/Testimonials";
import Accreditation from "@/components/Accreditation/Accreditation";
import SeoZone from "@/components/SeoZone/SeoZone";
import Footer from "@/components/Footer/Footer";
import RevealObserver from "@/components/RevealObserver/RevealObserver";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <MarqueeStrip />
        <About />
        <Numbers />
        <Departments />
        <Admissions />
        <StudentResources />
        <Testimonials />
        <Accreditation />
        <SeoZone />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
