"use client";
import Image from "next/image";

const Xray = () => {
  return (
    <section className="py-10 bg-[#011331]">
      <div className="flex flex-col items-center text-center px-5 sm:px-10 max-w-[1200px] mx-auto">
        {/* Título */}
        <h1 className="mb-5 text-[#B9C2D8] font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
          Diagnóstico Preciso com Tecnologia de Ponta
        </h1>

        {/* Subtítulo */}
        <p className="mb-10 text-[#B9C2D8] text-sm sm:text-base md:text-lg max-w-[800px]">
          Para planejar seu implante com total segurança, utilizamos os exames de imagem mais avançados.
        </p>

        {/* Cards */}
        <div className="flex flex-col xl:flex-row gap-10 w-full justify-center items-stretch">
          {/* Card 1 */}
          <div className="w-full sm:w-[500px] xl:w-[560px] bg-[#000919] border-2 border-[#005DFF] rounded-lg overflow-hidden flex flex-col h-auto">
            <div className="w-full h-auto">
              <Image
                src="/raio-x-panoramica.avif"
                width={557}
                height={300}
                alt="Raio X panorâmico"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex flex-col text-start p-6 h-full">
              <h2 className="mb-3 text-[#B9C2D8] font-bold text-lg sm:text-xl">
                Radiografia Panorâmica
              </h2>
              <p className="mb-4 text-[#0B85FF] text-sm sm:text-base">
                Essencial para o planejamento de implantes.
              </p>
              <p className="text-[#BFD1EA] text-sm sm:text-base leading-relaxed h-full">
                Este exame nos dá uma visão completa de toda a sua boca,
                incluindo todos os dentes, os ossos da maxila e mandíbula, e as
                articulações. Com ela, avaliamos a saúde óssea geral e a posição
                exata para o seu novo sorriso.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[500px] xl:w-[560px] bg-[#011638] border-2 border-[#005DFF] rounded-lg overflow-hidden flex flex-col">
            <div className="w-full h-auto">
              <Image
                src="/raio-x-periapical.avif"
                width={557}
                height={300}
                alt="Raio X periapical"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex flex-col text-start p-6">
              <h2 className="mb-3 text-[#B9C2D8] font-bold text-lg sm:text-xl">
                Radiografia Periapical
              </h2>
              <p className="mb-4 text-[#0B85FF] text-sm sm:text-base">
                Focada nos detalhes.
              </p>
              <p className="text-[#BFD1EA] text-sm sm:text-base leading-relaxed">
                O Raio-X periapical mostra um ou mais dentes em sua totalidade,
                da coroa até a ponta da raiz. É fundamental para analisar de
                perto a estrutura do dente, identificar lesões, fraturas ou a
                condição do osso ao redor, garantindo que o tratamento seja
                perfeitamente indicado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Xray;
