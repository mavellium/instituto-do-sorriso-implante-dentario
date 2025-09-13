"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/../public/hero-dental.jpg";
import Image from "next/image";

const Hero = () => {
  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent z-10" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-300/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge className="bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200/70 transition-all duration-300">
              ✨ Mais de 500 sorrisos transformados
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[rgb(52,66,86)] max-w-xl">
                Recupere sua{" "}
                <span className="text-blue-600 font-bold">autoestima</span>{" "}
                com Implantes Dentários
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Agende sua avaliação e conheça o tratamento ideal para
                você. Transforme seu sorriso com tecnologia de ponta e cuidado
                humanizado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
              >
                🦷 Quero Agendar Minha Avaliação
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                📞 Falar no WhatsApp
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={heroImage}
                alt="Pessoa sorrindo com dentes perfeitos - Instituto do Sorriso"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-800">
                  Avaliação
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-md">
              <div className="text-center">
                <div className="font-bold text-blue-600 text-lg">100%</div>
                <div className="text-xs text-gray-500">
                  Satisfação
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
