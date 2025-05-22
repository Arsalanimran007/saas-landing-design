import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Navbar from "@/components/Navbar";
import ProductShowCase from "@/components/ProductShowCase";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <>
   <Banner />
   <Navbar />
   <Hero />
   <LogoTicker />
   <Features />
   <ProductShowCase />
   <FAQs />
   <CallToAction />
   <Footer />
   </>
  );
}
