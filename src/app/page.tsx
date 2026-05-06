import BackToTop from "@/components/BackToTop";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import RevealOnScroll from "@/components/RevealOnScroll";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <RevealOnScroll animationClassName="animate__fadeIn animate__faster" className="[&>*]:w-full">
        <Hero />
      </RevealOnScroll>
      <RevealOnScroll delayMs={80} className="[&>*]:w-full">
        <Programs />
      </RevealOnScroll>
      <RevealOnScroll delayMs={80} className="[&>*]:w-full">
        <WhyChooseUs />
      </RevealOnScroll>
      <RevealOnScroll delayMs={80} className="[&>*]:w-full">
        <Testimonials />
      </RevealOnScroll>
      <RevealOnScroll delayMs={80} className="[&>*]:w-full">
        <Stats />
      </RevealOnScroll>
      <RevealOnScroll delayMs={80} className="[&>*]:w-full">
        <CTASection />
      </RevealOnScroll>
      <Footer />
      <BackToTop />
    </main>
  );
}
