/* eslint-disable @next/next/no-img-element */
"use client";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

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
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[rgb(255,255,255)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(52,66,86)]">
            O que nossos{" "}
            <span className="text-[rgb(0,119,255)] font-bold">
              pacientes dizem
            </span>
          </h2>
          <p className="text-lg text-[rgb(130,140,160)] max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas no Instituto do Sorriso
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 h-full bg-[rgb(255,255,255)] border-2 border-[rgb(229,231,235)] hover:border-[rgb(0,119,255,0.3)] transition-all duration-300 hover:shadow-[0_8px_30px_-8px_rgba(52,66,86,0.15)] relative overflow-hidden group"
            >
              {/* Background decoration */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[rgb(0,119,255,0.2)] group-hover:text-[rgb(0,119,255.0.3)] transition-colors duration-300" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 fill-[rgb(253,203,113)] text-[rgb(253,203,113)]" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <blockquote className="text-[rgb(130,140,160)] italic leading-relaxed mb-8 text-sm">
                {testimonial.text}
              </blockquote>
              
              {/* Patient info */}
              <div className="flex items-center gap-4 pt-4 border-t border-[rgb(229,231,235)]">
                <img 
                  src={testimonial.image} 
                  alt={`Foto de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[rgb(52,66,86)]">{testimonial.name}</h4>
                  <p className="text-xs text-[rgb(130,140,160)]">{testimonial.age}</p>
                  <p className="text-xs text-[rgb(0,119,255)] font-medium">{testimonial.treatment}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(254,243,199)] rounded-lg border border-[rgb(253,203,113)]">
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-4 h-4 fill-[rgb(253,203,113)] text-[rgb(253,203,113)]" />
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

export default Testimonials;
