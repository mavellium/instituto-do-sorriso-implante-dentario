import About from "@/components/About";
import Benefits from "@/components/Benefits";
import ButtonWhatsapp from "@/components/ButtonWhatsapp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionVideo from "@/components/SectionVideo";
import Specialists from "@/components/Specialists";
import Testimonials from "@/components/Testimonials";
import Treatments from "@/components/Treatments";
import Xray from "@/components/Xray";

export default function Home() {
  return (
    <>
      <main>
        <Hero></Hero>
        <SectionVideo></SectionVideo>
        <Benefits></Benefits>
        <About></About>
        <Treatments></Treatments>
        <Xray></Xray>
        <Specialists></Specialists>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <ButtonWhatsapp></ButtonWhatsapp>
    </>
  );
}
