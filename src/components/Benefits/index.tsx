"use client";
import { Smile, Zap, Shield, Heart } from "lucide-react";

const benefits = [
  {
    icon: Smile,
    title: "Estética Natural",
    description: "Implantes que se integram perfeitamente ao seu sorriso natural"
  },
  {
    icon: Zap,
    title: "Mastigação Eficiente",
    description: "Recupere 100% da sua capacidade mastigatória"
  },
  {
    icon: Shield,
    title: "Resultado Definitivo",
    description: "Solução permanente que dura toda a vida"
  },
  {
    icon: Heart,
    title: "Procedimento Seguro",
    description: "Técnicas modernas e totalmente indolores"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-[#011331]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#B9C2D8]">
            Por que escolher nossos{" "}
            <span className="text-[#0B85FF] font-bold">
              Implantes Dentários
            </span>
          </h2>
          <p className="text-lg text-[#BFD1EA] max-w-2xl mx-auto">
            Transforme sua vida com a mais avançada tecnologia em implantodontia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 bg-[#012159] rounded-2xl shadow-[0_4px_20px_-4px_rgba(52,66,86,0.1)] hover:shadow-[0_8px_30px_-8px_rgba(52,66,86,0.15)] transition-all duration-300 hover:scale-105 border border-[rgba(52,66,86,0.2)]"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[rgb(0,119,255)] to-[rgb(0,80,204)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="font-semibold text-lg mb-3 text-[#BFD1EA]">
                {benefit.title}
              </h3>
              
              <p className="text-[#BFD1EA] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
