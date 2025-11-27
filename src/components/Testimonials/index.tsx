"use client";
import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Maria Silva",
    age: "45 anos",
    treatment: "Implante Unitário",
    text: "Estava muito insegura com meu sorriso há anos. O Dr. Calebe foi incrível, me explicou todo o processo e o resultado ficou perfeito! Voltei a sorrir sem medo.",
    rating: 5,
    image:
      "https://i.pinimg.com/originals/44/26/53/4426535db70cf9e5b58a6f4f7f9a98a3.jpg",
  },
  {
    name: "João Santos",
    age: "52 anos",
    treatment: "Prótese Protocolo",
    text: "Perdi vários dentes e achei que nunca mais ia conseguir comer direito. Com o protocolo, mudou minha vida completamente. Recomendo demais o Instituto!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Ana Costa",
    age: "38 anos",
    treatment: "Ortodontia + Harmonização",
    text: "A Dra. Luana é maravilhosa! Além de alinhar meus dentes, fez harmonização facial. O resultado superou todas as minhas expectativas. Equipe nota 10!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Carlos Pereira",
    age: "50 anos",
    treatment: "Implante Múltiplo",
    text: "O tratamento foi rápido e profissional. Estou muito satisfeito com o resultado e recomendo para todos que querem melhorar o sorriso. Equipe nota 10!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(2);
  const total = testimonials.length;

  // Responsividade
  useEffect(() => {
    const updateCardsVisible = () => {
      setCardsVisible(window.innerWidth < 640 ? 1 : 2);
    };
    updateCardsVisible();
    window.addEventListener("resize", updateCardsVisible);
    return () => window.removeEventListener("resize", updateCardsVisible);
  }, []);

  // Navegação
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev + cardsVisible >= total ? 0 : prev + cardsVisible
    );
  }, [cardsVisible, total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev - cardsVisible < 0 ? Math.max(total - cardsVisible, 0) : prev - cardsVisible
    );
  }, [cardsVisible, total]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Cards visíveis
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsVisible
  );

  return (
    <section className="py-20 bg-[#012159] relative">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#B9C3D8]">
            O que nossos <span className="text-[#0077FF] font-bold">pacientes dizem</span>
          </h2>
          <p className="text-lg text-[#BFD1EA] max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas no Instituto do Sorriso
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-[1200px] mx-auto flex items-center gap-6">
          <button
            onClick={prevSlide}
            className="bg-[#003BA1]/70 text-white p-3 rounded-full hover:bg-[#003BA1]/90 transition z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex flex-1 gap-6 overflow-hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 bg-[#0000004e] border-2 border-[#0077FF] hover:border-[rgb(0,119,255,0.3)] transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(52,66,86,0.15)] relative overflow-hidden group text-left flex flex-col justify-between"
                style={{ flex: `0 0 ${95 / cardsVisible}%`, minHeight: "360px" }}
              >
                <div className="p-8">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-[rgb(0,119,255,0.2)] group-hover:text-[rgb(0,119,255,0.3)] transition-colors duration-300" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="w-5 h-5 fill-[rgba(253,204,113,0.16)] text-[rgb(253,203,113)]"
                      />
                    ))}
                  </div>
                  <blockquote className="text-[#BFD1EA] italic leading-relaxed mb-8 text-sm line-clamp-5">
                    {testimonial.text}
                  </blockquote>
                </div>

                <div className="flex items-center gap-4 p-6 border-t border-[rgb(229,231,235)]">
                  <Image
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[#B9C3D8]">{testimonial.name}</h4>
                    <p className="text-xs text-[#BFD1EA]">{testimonial.age}</p>
                    <p className="text-xs text-[#0077FF] font-medium">{testimonial.treatment}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-[#003BA1]/70 text-white p-3 rounded-full hover:bg-[#003BA1]/90 transition z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bolinhas */}
        <div className="flex justify-center mt-6 gap-2">
          {[0, 1, 2].map((pageIndex) => {
            const isActive = currentIndex % 3 === pageIndex;
            return (
              <button
                key={pageIndex}
                onClick={() => setCurrentIndex(pageIndex)}
                className={`w-3 h-3 rounded-full transition-all ${
                  isActive ? "bg-[#0077FF]" : "bg-[rgba(255,255,255,0.3)]"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;