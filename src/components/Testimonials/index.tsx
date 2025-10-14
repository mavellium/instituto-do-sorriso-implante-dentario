"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    age: "45 anos",
    treatment: "Implante Unitário",
    text: "Estava muito insegura com meu sorriso há anos. O Dr. Calebe foi incrível, me explicou todo o processo e o resultado ficou perfeito! Voltei a sorrir sem medo.",
    rating: 5,
    image: "https://i.pinimg.com/originals/44/26/53/4426535db70cf9e5b58a6f4f7f9a98a3.jpg"
  },
  {
    name: "João Santos",
    age: "52 anos", 
    treatment: "Prótese Protocolo",
    text: "Perdi vários dentes e achei que nunca mais ia conseguir comer direito. Com o protocolo, mudou minha vida completamente. Recomendo demais o Instituto!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Ana Costa",
    age: "38 anos",
    treatment: "Ortodontia + Harmonização",
    text: "A Dra. Luana é maravilhosa! Além de alinhar meus dentes, fez harmonização facial. O resultado superou todas as minhas expectativas. Equipe nota 10!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Carlos Pereira",
    age: "50 anos",
    treatment: "Implante Múltiplo",
    text: "O tratamento foi rápido e profissional. Estou muito satisfeito com o resultado e recomendo para todos que querem melhorar o sorriso. Equipe nota 10! ",
    rating: 5,
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(3);
  const total = testimonials.length;

  // Responsividade
  useEffect(() => {
    const updateCardsVisible = () => {
      if (window.innerWidth < 640) setCardsVisible(1); // mobile
      else if (window.innerWidth < 1024) setCardsVisible(2); // tablet
      else setCardsVisible(3); // desktop
    };

    updateCardsVisible();
    window.addEventListener("resize", updateCardsVisible);
    return () => window.removeEventListener("resize", updateCardsVisible);
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev + 1 > total - cardsVisible ? 0 : prev + 1
      );
    }, 4000); // troca a cada 4 segundos
    return () => clearInterval(interval);
  }, [cardsVisible, total]);

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev - 1 < 0 ? total - cardsVisible : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev + 1 > total - cardsVisible ? 0 : prev + 1
    );
  };

  return (
    <section className="py-20 bg-[#012159] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#B9C3D8]">
            O que nossos{" "}
            <span className="text-[#0077FF] font-bold">pacientes dizem</span>
          </h2>
          <p className="text-lg text-[#BFD1EA] max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas no Instituto do Sorriso
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 gap-4"
              style={{
                transform: `translateX(-${(100 / cardsVisible) * currentIndex}%)`,
                width: `${(100 / cardsVisible) * total}%`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-8 h-full bg-[#0000004e] border-2 border-[#0077FF] mx-1 hover:border-[rgb(0,119,255,0.3)] transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(52,66,86,0.15)] relative overflow-hidden group flex-shrink-0"
                  style={{ width: `${100 / total}%` }}
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-[rgb(0,119,255,0.2)] group-hover:text-[rgb(0,119,255,0.3)] transition-colors duration-300" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 fill-[rgba(253, 204, 113, 0.16)] text-[rgb(253,203,113)]" />
                    ))}
                  </div>
                  
                  <blockquote className="text-[#BFD1EA] italic leading-relaxed mb-8 text-sm">
                    {testimonial.text}
                  </blockquote>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-[rgb(229,231,235)]">
                    <img 
                      src={testimonial.image} 
                      alt={`Foto de ${testimonial.name}`}
                      className="w-12 h-12 rounded-full object-cover"
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
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-6 -translate-y-1/2 bg-[#003BA1]/70 text-white p-3 rounded-full hover:bg-[#003BA1]/90 transition z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-6 -translate-y-1/2 bg-[#003BA1]/70 text-white p-3 rounded-full hover:bg-[#003BA1]/90 transition z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#0077FF]"
                    : "bg-[rgba(255,255,255,0.3)]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Rating summary */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[rgba(254, 243, 199, 0.14)] rounded-lg border border-[rgb(253,203,113)]">
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-4 h-4 fill-[rgba(253, 204, 113, 0.11)] text-[rgb(253,203,113)]" />
              ))}
            </div>
            <span className="text-[rgb(178,145,57)] font-medium text-sm">
              4.9/5 - Mais de 200 avaliações no Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
