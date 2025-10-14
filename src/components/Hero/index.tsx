"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

  const Hero = () => {
  const handleWhatsAppClick = (message: string) => {
    window.open(`https://wa.me/5514996847415?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#010A1B] via-[#06204D] to-[#041737] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#010A1B]/95 to-transparent z-10" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#06204D]/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#041737]/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge className="bg-[#031A38] text-white border border-[#0D72F2] hover:bg-[#0D72F2]/70 transition-all duration-300">
              ✨ Mais de 500 sorrisos transformados
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#B9C3D8] max-w-xl">
                Recupere sua{" "}
                <span className="text-[#0073E6] font-bold">autoestima</span>{" "}
                com Implantes Dentários
              </h1>

              <p className="text-xl text-[#BFD1EA] leading-relaxed max-w-lg">
                Agende sua avaliação e conheça o tratamento ideal para
                você. Transforme seu sorriso com tecnologia de ponta e cuidado
                humanizado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() =>
                handleWhatsAppClick(
                  "Olá! Gostaria de agendar uma avaliação e saber mais sobre os tratamentos de implante dentário."
                )
              }
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
              >
                🦷 Quero Agendar Minha Avaliação
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-3 border-[#003BA1]">
              <Image
                src="/hero-dental.png"
                width={800}
                height={600}
                priority
                alt="Pessoa sorrindo com dentes perfeitos - Instituto do Sorriso"
                className="w-full h-[500px] object-cover border-3 border-[#003BA1]"
              />
              <div className="" />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-[#013AA0] p-4 rounded-xl shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">
                  Avaliação
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-[#00102B] p-4 rounded-xl shadow-md">
              <div className="text-center">
                <div className="font-bold text-white text-lg">100%</div>
                <div className="text-xs text-white">
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
