"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle } from "lucide-react";
import drCalebeImage from "@/../public/dr-calebe.avif";
import drLuanaImage from "@/../public/dr-luana.avif";
import Image from "next/image";

const specialists = [
  {
    name: "Dr. Calebe Jr.",
    cro: "CRO/RT: 108562/SP",
    specialty: "Especialista em Implantodontia e Reabilitação Oral",
    image: drCalebeImage,
    specialties: [
      "Implantes dentários",
      "Prótese protocolo sobre implantes",
      "Lentes de contato dental",
      "Escaneamento oral de alta precisão",
      "Laserterapia para tratamentos menos invasivos"
    ]
  },
  {
    name: "Dra. Luana",
    cro: "CRO: 108581/SP",
    specialty: "Especialista em Ortodontia",
    image: drLuanaImage,
    specialties: [
      "Aparelhos fixos (estéticos e metálicos)",
      "Aparelhos invisíveis (última geração)",
      "Harmonização Orofacial",
      "Botox",
      "Bioestimulador de colágeno (HarmonyCa)"
    ]
  }
];

const Specialists = () => {
  return (
    <section className="py-20 bg-[#011331]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#031A38] text-white border border-[#0D72F2] mb-4">
            Nossa Equipe
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#B9C3D8]">
            Excelência e cuidado em{" "}
            <span className="text-[#0077FF] font-bold">
              cada detalhe do seu sorriso
            </span>
          </h2>
          <p className="text-lg text-[#BFD1EA] max-w-2xl mx-auto">
            Conheça os especialistas que irão cuidar do seu sorriso com a mais alta qualidade técnica e humana
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {specialists.map((specialist, index) => (
            <Card
              key={index}
              className="overflow-hidden 
                border-1,5
                border-[#005DFF] 
                rounded-2xl 
                transition-all duration-300 
                hover:border-[#005DFF] 
                hover:shadow-[0_10px_25px_-5px_rgba(178,212,247,0.2)] 
                bg-[#002056] 
                group
              "
            >
              {/* Header with image */}
              <div className="relative h-80 overflow-hidden rounded-t-2xl">
                <Image
                  src={specialist.image}
                  alt={`Foto do ${specialist.name}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{specialist.name}</h3>
                  <p className="text-white/90 font-medium">{specialist.cro}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-[rgb(255,255,255)/0.9] p-2 rounded-lg">
                    <Award className="w-6 h-6 text-[rgb(0,119,255)]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div>
                  <Badge className="bg-[#031A38] text-white border border-[#0D72F2] mb-3">
                    {specialist.specialty}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-[#B9C2D8] mb-4">Áreas de Atuação:</h4>
                  {specialist.specialties.map((specialty, specialtyIndex) => (
                    <div key={specialtyIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[rgb(0,119,255)] mt-0.5 flex-shrink-0" />
                      <span className="text-[#BFD1EA] text-sm leading-relaxed">{specialty}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[rgb(220,220,220)]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[rgb(76,217,100)] rounded-full animate-pulse" />
                    <span className="text-sm text-[#BFD1EA]">Atendimento ativo</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-[#0D72F24e] rounded-2xl border border-[#0D72F2] 
                  transition-all duration-300 
                  hover:border-[rgb(178,212,247)] 
                  hover:shadow-[0_10px_25px_-5px_rgba(178,212,247,0.2)]">
            <Award className="w-8 h-8 text-[rgb(0,119,255)]" />
            <div className="text-left">
              <div className="font-semibold text-[#B9C3D8]">Profissionais Certificados</div>
              <div className="text-sm text-[#BFD1EA]">Registrados no CRO e em constante atualização</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Specialists;
