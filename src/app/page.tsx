import About from "@/components/About";
import Benefits from "@/components/Benefits";
import ButtonWhatsapp from "@/components/ButtonWhatsapp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Specialists from "@/components/Specialists";
import Testimonials from "@/components/Testimonials";
import Treatments from "@/components/Treatments";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <Hero></Hero>
        <Benefits></Benefits>
        <About></About>
        <Treatments></Treatments>
        <Specialists></Specialists>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <ButtonWhatsapp></ButtonWhatsapp>
    </>
  );
}
