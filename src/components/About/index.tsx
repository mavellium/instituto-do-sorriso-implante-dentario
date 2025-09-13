"use client";
import Image from "next/image";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section className="py-20 bg-[hsl(0_0%_100%)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_40px_-12px_hsl(210_100%_45%/0.25)] w-full h-[500px] object-cover">
              <Image
                src="/instituto.jpg"
                alt="Interior moderno do Instituto do Sorriso"
                className="w-full h-[500px] object-cover"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210_100%_45%/0.1)] to-transparent" />
            </div>

            {/* Stats floating cards */}
            <div className="absolute -top-6 -right-6 bg-[hsl(0_0%_100%)] p-6 rounded-xl shadow-[0_8px_30px_-8px_hsl(210_100%_45%/0.15)]">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-[hsl(210_100%_45%)]" />
                <div>
                  <div className="font-bold text-xl text-[hsl(210_100%_45%)]">
                    8+
                  </div>
                  <div className="text-sm text-[hsl(215_16%_47%)]">
                    Anos de experiência
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-[hsl(0_0%_100%)] p-6 rounded-xl shadow-[0_8px_30px_-8px_hsl(210_100%_45%/0.15)]">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-[hsl(210_100%_45%)]" />
                <div>
                  <div className="font-bold text-xl text-[hsl(210_100%_45%)]">
                    500+
                  </div>
                  <div className="text-sm text-[hsl(215_16%_47%)]">
                    Sorrisos transformados
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-[hsl(210_100%_45%/0.1)] text-[hsl(210_100%_45%)] border border-[hsl(210_100%_45%/0.2)] mb-4">
                Instituto do Sorriso
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[hsl(215_25%_27%)]">
                Transformando vidas através de{" "}
                <span className="text-[hsl(210_100%_45%)] font-bold">
                  sorrisos perfeitos
                </span>
              </h2>
              <p className="text-lg text-[hsl(215_16%_47%)] leading-relaxed">
                No Instituto do Sorriso, combinamos experiência de mais de 15 anos com as mais
                avançadas tecnologias em implantodontia. Nossa missão é devolver não apenas
                a função mastigatória, mas principalmente a autoestima e qualidade de vida
                dos nossos pacientes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[hsl(210_100%_45%)] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Tecnologia de Ponta</h4>
                  <p className="text-[hsl(215_16%_47%)]">
                    Equipamentos modernos e técnicas minimamente invasivas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[hsl(210_100%_45%)] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Atendimento Humanizado</h4>
                  <p className="text-[hsl(215_16%_47%)]">
                    Cuidado personalizado desde a primeira consulta
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[hsl(210_100%_45%)] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Garantia Total</h4>
                  <p className="text-[hsl(215_16%_47%)]">
                    Acompanhamento completo e garantia de satisfação
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[hsl(210_100%_45%)]" />
                <span className="text-sm text-[hsl(215_16%_47%)]">
                  Avaliação
                </span>
              </div>
              <Badge
                variant="outline"
                className="border-[hsl(210_100%_45%)] text-[hsl(210_100%_45%)]"
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
