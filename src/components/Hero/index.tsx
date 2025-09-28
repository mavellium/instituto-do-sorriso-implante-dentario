"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Hero = () => {
  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
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
                onClick={scrollToForm}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
              >
                🦷 Quero Agendar Minha Avaliação
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-[#025812] text-[#0CDE0C] hover:bg-[#025812] hover:text-white transition-colors duration-300 bg-[#025812]/20"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 56 56"
                  fill="#0CDE0C"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-9 sm:h-9 w-7 h-7"
                >
                  <path d="M47.8392 8.14813C45.2589 5.55563 42.1858 3.50005 38.799 2.10116C35.4123 0.702273 31.7795 -0.0119368 28.1126 0.000150906C12.7477 0.000150906 0.225126 12.4601 0.225126 27.7481C0.225126 32.6481 1.5196 37.4081 3.9397 41.608L0 56L14.7739 52.136C18.8543 54.348 23.4412 55.524 28.1126 55.524C43.4774 55.524 56 43.064 56 27.7761C56 20.3561 53.1015 13.3841 47.8392 8.14813ZM28.1126 50.82C23.9477 50.82 19.8673 49.7 16.2935 47.6L15.4492 47.096L6.66935 49.392L9.00502 40.88L8.44221 40.012C6.12777 36.3358 4.89909 32.086 4.89648 27.7481C4.89648 15.0361 15.3085 4.67614 28.0844 4.67614C34.2754 4.67614 40.1005 7.08413 44.4623 11.4521C46.6224 13.5909 48.3342 16.1352 49.4984 18.9374C50.6626 21.7396 51.256 24.7439 51.2442 27.7761C51.3005 40.488 40.8884 50.82 28.1126 50.82ZM40.8322 33.5721C40.1286 33.2361 36.6955 31.5561 36.0764 31.3041C35.4291 31.0801 34.9789 30.9681 34.5005 31.6401C34.0221 32.3401 32.6995 33.9081 32.3055 34.3561C31.9116 34.8321 31.4894 34.8881 30.7859 34.5241C30.0824 34.1881 27.8312 33.4321 25.1859 31.0801C23.1035 29.2321 21.7246 26.9641 21.3025 26.2641C20.9085 25.5641 21.2462 25.2001 21.6121 24.8361C21.9216 24.5281 22.3156 24.0241 22.6533 23.6321C22.991 23.2401 23.1317 22.9321 23.3568 22.4841C23.5819 22.0081 23.4693 21.6161 23.3005 21.2801C23.1317 20.9441 21.7246 17.5281 21.1618 16.1281C20.599 14.7841 20.008 14.9521 19.5859 14.9241H18.2352C17.7568 14.9241 17.0251 15.0921 16.3779 15.7921C15.7588 16.4921 13.9578 18.1721 13.9578 21.5881C13.9578 25.0041 16.4623 28.3081 16.8 28.7561C17.1377 29.2321 21.7246 36.2321 28.7035 39.2281C30.3638 39.956 31.6583 40.376 32.6714 40.684C34.3317 41.216 35.8513 41.132 37.0613 40.964C38.4121 40.768 41.198 39.284 41.7608 37.6601C42.3518 36.0361 42.3518 34.6641 42.1548 34.3561C41.9578 34.0481 41.5357 33.9081 40.8322 33.5721Z" />
                </svg> Falar no WhatsApp
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/hero-dental.png"
                width={800}
                height={600}
                priority
                alt="Pessoa sorrindo com dentes perfeitos - Instituto do Sorriso"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
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
