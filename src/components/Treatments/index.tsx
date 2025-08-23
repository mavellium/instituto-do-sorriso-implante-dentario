"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, CheckCircle, Clock, MessageCircle, Star } from "lucide-react";
import implanteImage from "@/../public/implantes.jpg";
import protocoloImage from "@/../public/protocolo.jpg";

const treatments = [
  {
    icon: Heart,
    title: "Implante Unitário",
    subtitle: "Solução definitiva para 1 a 3 dentes",
    description: "O implante dentário é a técnica mais moderna e segura para substituir dentes perdidos. Utilizamos implantes de titânio de alta qualidade que se integram perfeitamente ao osso, proporcionando uma base sólida e duradoura para a coroa protética.",
    detailedDescription: "Nosso protocolo cirúrgico utiliza tecnologia de ponta com guias cirúrgicos computadorizados, garantindo máxima precisão no posicionamento do implante. O procedimento é realizado com anestesia local, sendo praticamente indolor, e preserva completamente os dentes adjacentes saudáveis.",
    features: [
      "Preservação total dos dentes adjacentes saudáveis",
      "Material biocompatível (titânio grau médico)",
      "Resultado estético indistinguível de um dente natural",
      "Restauração completa da função mastigatória",
      "Procedimento minimamente invasivo com tecnologia guiada",
      "Osseointegração garantida em 3-6 meses",
      "Durabilidade superior a 20 anos com cuidados adequados"
    ],
    safetyFeatures: [
      "Ambiente cirúrgico com esterilização classe hospitalar",
      "Implantes certificados pela ANVISA e FDA",
      "Tomografia 3D para planejamento preciso",
      "Medicação pré e pós-operatória incluída"
    ],
    duration: "2-3 consultas ao longo de 3-6 meses",
    badge: "Mais Procurado",
    image: implanteImage,
    idealFor: "Pacientes que perderam 1 a 3 dentes e possuem estrutura óssea adequada",
    process: "Avaliação clínica e tomográfica → Cirurgia de implante → Período de cicatrização → Colocação da coroa definitiva",
    recoveryInfo: "Pós-operatório confortável com medicação adequada. Retorno às atividades normais em 2-3 dias.",
    whatsappMessage: "Olá! Quero saber mais sobre Implante Unitário e agendar minha avaliação gratuita."
  },
  {
    icon: Users,
    title: "Prótese Protocolo",
    subtitle: "Reabilitação completa da arcada dentária",
    description: "A Prótese Protocolo é a solução ideal para pacientes que perderam todos ou a maioria dos dentes de uma arcada. Com apenas 4 a 6 implantes estrategicamente posicionados, é possível fixar uma prótese completa, devolvendo função mastigatória, estética e autoestima.",
    detailedDescription: "Esta técnica revolucionária permite que o paciente saia no mesmo dia da cirurgia com dentes fixos provisórios, eliminando o constrangimento de ficar sem dentes. Utilizamos planejamento digital 3D para posicionamento otimizado dos implantes, maximizando a estabilidade e durabilidade.",
    features: [
      "Reabilitação completa da arcada com apenas 4-6 implantes",
      "Prótese fixa provisória instalada no mesmo dia da cirurgia",
      "Planejamento digital 3D para máxima precisão",
      "Material premium: implantes de titânio e prótese em resina reforçada",
      "Resultado estético e funcional imediato",
      "Distribuição de forças otimizada para longevidade",
      "Manutenção simples e eficaz"
    ],
    safetyFeatures: [
      "Centro cirúrgico com padrões hospitalares",
      "Implantes de marcas mundialmente reconhecidas",
      "Sedação consciente disponível para maior conforto",
      "Acompanhamento pós-operatório especializado"
    ],
    duration: "3-4 consultas ao longo de 4-6 meses",
    badge: "Solução Completa",
    image: protocoloImage,
    idealFor: "Pacientes edêntulos totais ou com poucos dentes remanescentes comprometidos",
    process: "Avaliação completa → Planejamento digital → Cirurgia e prótese provisória → Cicatrização → Prótese definitiva",
    recoveryInfo: "Pós-operatório controlado com medicação e dieta orientada. Adaptação gradual à nova prótese.",
    whatsappMessage: "Olá! Quero saber mais sobre Prótese Protocolo e agendar minha avaliação gratuita."
  }
];

const Treatments = () => {
  return (
    <section style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, hsl(220,13%,95%,0.3), hsl(0,0%,100%))' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'hsl(215,25%,27%)' }}>
            Implante Dentário ou Prótese Protocolo?{" "}
            <span style={{ color: 'hsl(210,100%,45%)', fontWeight: 700 }}>
              Encontre a Melhor Solução
            </span>
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'hsl(215,16%,47%)', maxWidth: '48rem', margin: '0 auto 1.5rem' }}>
            O <strong>Implante Unitário</strong> é ideal para quem perdeu um ou poucos dentes, enquanto a <strong>Prótese Protocolo</strong> reabilita uma arcada inteira com resultado rápido e definitivo.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '0.5rem', background: 'hsl(200,100%,95%)', border: '1px solid hsl(210,100%,45%,0.2)' }}>
            <Star style={{ width: '1.25rem', height: '1.25rem', color: 'hsl(210,100%,45%)' }} />
            <span style={{ color: 'hsl(210,100%,45%)', fontWeight: 500 }}>Avaliação gratuita • Plano personalizado • Sem compromisso</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '2rem', maxWidth: '96rem', margin: '0 auto' }}>
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              className="p-0 h-full border-2 border-[hsl(220,13%,91%)] bg-white relative overflow-hidden transition-all duration-300 hover:border-[hsl(200,70%,80%)]"
            >
              {/* Badge */}
              <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 10 }}>
                <Badge style={{ background: '#fff', color: 'hsl(210,100%,45%)', border: '1px solid hsl(210,100%,45%,0.2)', fontWeight: 500, cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(0, 115, 230, 1)'}
                  onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                >
                  {treatment.badge}
                </Badge>
              </div>

              {/* Image */}
              <div className="relative w-full h-[300px] overflow-hidden group">
                <Image
                  src={treatment.image}
                  alt={`Resultado ${treatment.title}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)' }} />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem' }}>
                  <div style={{ width: '3rem', height: '3rem', background: '#fff', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px -4px hsl(210,100%,45%,0.1)' }}>
                    <treatment.icon style={{ width: '1.5rem', height: '1.5rem', color: 'hsl(210,100%,45%)' }} />
                  </div>
                </div>
              </div>

              {/* Content */}
              < div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'hsl(215,25%,27%)' }}>{treatment.title}</h3>
                  <p style={{ fontWeight: 500, color: 'hsl(210,100%,45%)', marginBottom: '0.75rem' }}>{treatment.subtitle}</p>
                  <p style={{ color: 'hsl(215,16%,47%)', lineHeight: 1.6, marginBottom: '1rem' }}>{treatment.description}</p>

                  <div style={{ background: 'hsl(200,100%,95%,0.3)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                    <p style={{ fontSize: '0.875rem', color: 'hsl(215,16%,47%)', lineHeight: 1.6 }}>{treatment.detailedDescription}</p>
                  </div>

                  {/* Indicado para */}
                  <div style={{ padding: '0.75rem', background: 'hsl(210,100%,45%,0.05)', borderRadius: '0.5rem', marginBottom: '1rem', border: '1px solid hsl(210,100%,45%,0.2)' }}>
                    <p style={{ fontSize: '0.75rem', color: 'hsl(210,100%,45%)', fontWeight: 500, marginBottom: '0.25rem' }}>Indicado para</p>
                    <p style={{ fontSize: '0.875rem', color: 'hsl(215,25%,27%)' }}>{treatment.idealFor}</p>
                  </div>
                </div>

                {/* Benefícios e segurança */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h4 style={{ fontWeight: 600, fontSize: '0.875rem', color: 'hsl(215,25%,27%)' }}>Benefícios do Tratamento:</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {treatment.features.map((feature, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <CheckCircle style={{ width: '1rem', height: '1rem', color: 'hsl(210,100%,45%)', flexShrink: 0, marginTop: '0.125rem' }} />
                        <span style={{ fontSize: '0.875rem', color: 'hsl(215,16%,47%)', lineHeight: 1.6 }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid hsl(220,13%,91%)' }}>
                    <h4 style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.75rem', color: 'hsl(215,25%,27%)' }}>Segurança e Qualidade:</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {treatment.safetyFeatures.map((safety, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <CheckCircle style={{ width: '1rem', height: '1rem', color: 'hsl(120,60%,40%)', flexShrink: 0, marginTop: '0.125rem' }} />
                          <span style={{ fontSize: '0.875rem', color: 'hsl(215,16%,47%)', lineHeight: 1.6 }}>{safety}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Duração e processo */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid hsl(220,13%,91%)' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <Clock style={{ width: '1rem', height: '1rem', color: 'hsl(210,100%,45%)' }} />
                      <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'hsl(210,100%,45%)' }}>Duração do Tratamento</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'hsl(215,16%,47%)' }}>{treatment.duration}</p>
                  </div>

                  <div>
                    <h5 style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: 'hsl(215,25%,27%)' }}>Etapas do Tratamento:</h5>
                    <p style={{ fontSize: '0.875rem', color: 'hsl(215,16%,47%)', lineHeight: 1.6 }}>{treatment.process}</p>
                  </div>

                  <div style={{ background: 'hsl(120,60%,95%)', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid hsl(120,60%,85%)' }}>
                    <h5 style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem', color: 'hsl(120,60%,25%)' }}>Pós-operatório:</h5>
                    <p style={{ fontSize: '0.875rem', color: 'hsl(120,60%,35%)' }}>{treatment.recoveryInfo}</p>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  onClick={() => window.open(`https://wa.me/5514996847415?text=${encodeURIComponent(treatment.whatsappMessage)}`, '_blank')}
                  style={{ width: '100%', fontWeight: 500, height: '3rem', borderRadius: '0.5rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer' }}
                >
                  <MessageCircle style={{ width: '1.25rem', height: '1.25rem' }} />
                  Quero saber sobre {treatment.title}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison and final CTA */}

        <div className="mt-16 space-y-8">

          {/* Educational section */}

          <div
            className="rounded-xl p-8 border"
            style={{
              background: "linear-gradient(to right, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.1))",
              borderColor: "hsl(var(--primary) / 0.2)",
            }}
          >
            <h3
              className="text-xl font-bold text-center mb-6"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Precisa de mais informações para tomar sua decisão?
            </h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4
                  className="font-semibold mb-4 flex items-center gap-2"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  <Heart className="w-5 h-5" />
                  Quando escolher Implante Unitário:
                </h4>

                <ul
                  className="text-sm space-y-3 leading-relaxed"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  <li>• <strong>Quantidade:</strong> Perda de 1 a 3 dentes específicos</li>
                  <li>• <strong>Preservação:</strong> Dentes adjacentes estão saudáveis</li>
                  <li>• <strong>Estrutura óssea:</strong> Adequada na região do dente perdido</li>
                  <li>• <strong>Resultado:</strong> Solução altamente estética e funcional</li>
                </ul>
              </div>

              <div>
                <h4
                  className="font-semibold mb-4 flex items-center gap-2"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  <Users className="w-5 h-5" />
                  Quando escolher Prótese Protocolo:
                </h4>

                <ul
                  className="text-sm space-y-3 leading-relaxed"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  <li>• <strong>Quantidade:</strong> Perda de muitos ou todos os dentes</li>
                  <li>• <strong>Eficiência:</strong> Reabilita toda a arcada com poucos implantes</li>
                  <li>• <strong>Rapidez:</strong> Resultado funcional no mesmo dia</li>
                  <li>• <strong>Custo-benefício:</strong> Melhor relação para múltiplos dentes</li>
                </ul>
              </div>
            </div>

            <div
              className="mt-8 p-6 rounded-lg border"
              style={{
                background: "hsl(var(--background))",
                borderColor: "hsl(var(--primary) / 0.2)",
              }}
            >
              <h5
                className="font-semibold mb-3 text-center"
                style={{ color: "hsl(var(--foreground))" }}
              >
                Nossa Recomendação Profissional:
              </h5>
              <p
                className="text-center leading-relaxed"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                Cada caso é único. Durante sua avaliação gratuita, nossos especialistas farão exames
                clínicos e radiográficos para determinar qual tratamento oferece o melhor resultado
                para sua situação específica, considerando aspectos médicos, estéticos e funcionais.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Vamos encontrar a melhor solução para você
            </h3>

            <p
              className="mb-6 max-w-2xl mx-auto leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Agende sua <strong>avaliação gratuita e sem compromisso</strong>. Nossa equipe
              especializada realizará todos os exames necessários e apresentará um plano de
              tratamento personalizado, explicando cada etapa do processo para que você se sinta
              totalmente seguro e informado sobre sua decisão.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => {
                  window.open(
                    "https://wa.me/5514996847415?text=Olá! Quero agendar minha avaliação gratuita para implantes dentários. Preciso de orientação sobre qual tratamento é ideal para mim.",
                    "_blank"
                  );
                }}
                size="lg"
                className="font-medium h-14 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Agendar Avaliação Gratuita
              </Button>

              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                <Star className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
                <span>
                  Resposta imediata • Sem compromisso • Especialistas qualificados
                </span>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  );
};

export default Treatments;