import BackToTop from "@/components/BackToTop";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import ScrollRestoration from "@/components/ScrollRestoration";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollRestoration />
      <Navbar />
      <Hero />
      <Programs />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Stats />
      <Footer />
      <BackToTop />
    </main>
  );
}
