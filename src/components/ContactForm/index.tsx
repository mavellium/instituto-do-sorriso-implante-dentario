"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com seu sistema de envio
    const whatsappMessage = `Olá! Gostaria de agendar uma avaliação gratuita.%0A%0ANome: ${formData.name}%0ATelefone: ${formData.phone}%0AWhatsApp: ${formData.whatsapp}%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-primary/5 via-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Agende sua{" "}
            <span className="text-primary font-bold">
              Avaliação Gratuita
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para agendar sua consulta
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-white border-2 shadow-medium">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Entre em contato conosco</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground">Nome completo *</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 border-2 focus:border-primary"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">Telefone *</Label>
                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-2 border-2 focus:border-primary"
                  placeholder="(14) 9656-2383"
                />
              </div>
              
              <div>
                <Label htmlFor="whatsapp" className="text-sm font-medium text-foreground">WhatsApp</Label>
                <Input 
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="mt-2 border-2 focus:border-primary"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground">Mensagem (opcional)</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 border-2 focus:border-primary min-h-[120px]"
                  placeholder="Conte-nos um pouco sobre o que você gostaria de tratar..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-white border-2 shadow-medium">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Informações de contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua Cel. Joaquim Piza, 664<br />
                      Centro, Garça - SP<br />
                      CEP: 17400-000 
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <p className="text-muted-foreground">
                      (14) 9656-2383<br />
                      (14) 9656-2383 (WhatsApp)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <p className="text-muted-foreground">contato@institutodosorriso.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário de funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 14h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Quick CTA */}
            <Card className="p-6 bg-primary text-white">
              <h4 className="font-bold mb-2">🚀 Atendimento Imediato</h4>
              <p className="text-white/90 mb-4 text-sm">
                Precisa de atendimento urgente? Entre em contato pelo WhatsApp!
              </p>
              <Button 
                variant="secondary"
                size="sm"
                className="w-full bg-white text-primary hover:bg-white/90"
              >
                📱 Chamar no WhatsApp
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;