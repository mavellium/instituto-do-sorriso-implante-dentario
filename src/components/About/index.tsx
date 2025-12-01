"use client";
import React from 'react';
// Removido o import do "next/image" para corrigir o erro de compilação
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section className="py-20 bg-[#012159]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Coluna da Imagem e Estatísticas */}
          <div className="flex flex-col gap-8">
            
            {/* Bloco 1: Imagem e Cartões Flutuantes (VISÍVEL SOMENTE NO DESKTOP/TABLET) */}
            <div className="hidden sm:block relative w-full h-[300px] sm:h-[400px] lg:h-[500px]"> 
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_40px_-12px_hsl(210_100%_45%/0.25)] w-full h-full object-cover">
                    <img
                        src="/instituto.avif"
                        alt="Interior moderno do Instituto do Sorriso"
                        className="w-full h-full object-cover absolute" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210_100%_45%/0.1)] to-transparent" />
                </div>

                {/* Card 1 - Desktop (Absolute) */}
                <div className="absolute -top-8 -right-8 bg-[#0249C8] p-6 rounded-xl shadow-[0_8px_30px_-8px_hsl(210_100%_45%/0.15)]">
                    <div className="flex items-center gap-3">
                        <Award className="w-8 h-8 text-white" />
                        <div>
                            <div className="font-bold text-xl text-white">
                                8+
                            </div>
                            <div className="text-sm text-[#BFD1EA]">
                                Anos de experiência
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 - Desktop (Absolute) */}
                <div className="absolute -bottom-8 -left-8 bg-[#00102B] p-6 rounded-xl shadow-[0_8px_30px_-8px_hsl(210_100%_45%/0.15)]">
                    <div className="flex items-center gap-3">
                        <Users className="w-8 h-8 text-white" /> 
                        <div>
                            <div className="font-bold text-xl text-white">
                                500+
                            </div>
                            <div className="text-sm text-[#BFD1EA]">
                                Sorrisos transformados
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bloco 2: Imagem e Cartões Empilhados (VISÍVEL SOMENTE NO MOBILE) */}
            <div className="sm:hidden flex flex-col gap-6">

                {/* Imagem Mobile */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_40px_-12px_hsl(210_100%_45%/0.25)] w-full h-[300px]">
                    <img
                        src="/instituto.avif"
                        alt="Interior moderno do Instituto do Sorriso"
                        className="w-full h-full object-cover absolute"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210_100%_45%/0.1)] to-transparent" />
                </div>

                {/* Cartões Empilhados Abaixo da Imagem */}
                <div className="flex flex-col gap-4"> 
                    {/* Card 1 - Mobile (Flow) */}
                    <div className="w-full bg-[#0249C8] p-6 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3">
                            <Award className="w-8 h-8 text-white" />
                            <div>
                                <div className="font-bold text-xl text-white">
                                    8+
                                </div>
                                <div className="text-sm text-[#BFD1EA]">
                                    Anos de experiência
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Mobile (Flow) */}
                    <div className="w-full bg-[#00102B] p-6 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3">
                            <Users className="w-8 h-8 text-white" /> 
                            <div>
                                <div className="font-bold text-xl text-white">
                                    500+
                                </div>
                                <div className="text-sm text-[#BFD1EA]">
                                    Sorrisos transformados
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Content (Coluna de Conteúdo - Não alterada) */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-[#031A38] text-white border border-[#0D72F1] mb-4">
                Instituto do Sorriso
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#BFD1EA]">
                Transformando vidas através de{" "}
                <span className="text-[#0B85FF] font-bold">
                  sorrisos perfeitos
                </span>
              </h2>
              <p className="text-lg text-[#BFD1EA] leading-relaxed">
                No Instituto do Sorriso, combinamos experiência de mais de 15 anos com as mais
                avançadas tecnologias em implantodontia. Nossa missão é devolver não apenas
                a função mastigatória, mas principalmente a autoestima e qualidade de vida
                dos nossos pacientes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#0B85FF] mt-0.5 flex-shrink-0" />
                <div>
                  {/* Título alterado de <h4> para <h3> para corrigir a hierarquia semântica */}
                  <h3 className="font-semibold mb-1 text-white">Tecnologia de Ponta</h3> 
                  <p className="text-[#BFD1EA]">
                    Equipamentos modernos e técnicas minimamente invasivas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#0B85FF] mt-0.5 flex-shrink-0" /> 
                <div>
                  {/* Título alterado de <h4> para <h3> para corrigir a hierarquia semântica */}
                  <h3 className="font-semibold mb-1 text-white">Atendimento Humanizado</h3>
                  <p className="text-[#BFD1EA]">
                    Cuidado personalizado desde a primeira consulta
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#0B85FF] mt-0.5 flex-shrink-0" />
                <div>
                  {/* Título alterado de <h4> para <h3> para corrigir a hierarquia semântica */}
                  <h3 className="font-semibold mb-1 text-white">Garantia Total</h3>
                  <p className="text-[#BFD1EA]">
                    Acompanhamento completo e garantia de satisfação
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                {/* Contraste Corrigido: Ícone agora usa um azul mais claro para garantir contraste */}
                <Clock className="w-5 h-5 text-[#0B85FF]" /> 
                <span className="text-sm text-[#BFD1EA]">
                  Avaliação
                </span>
              </div>
              <Badge
                variant="outline"
                // Contraste Corrigido: Texto e borda agora são brancos/claros no fundo escuro.
                className="border-white/50 text-white" 
              >
                CRO Registrado
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;