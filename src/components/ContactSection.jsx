import { Linkedin, Mail, MapPin, Phone, Send, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnnvkoog", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Obrigado por entrar em contato! Responderei o mais breve possível.",
        });
        form.reset();
      } else {
        throw new Error("Falha ao enviar a mensagem.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar a mensagem.",
        description: "Por favor, tente novamente mais tarde ou entre em contato por e-mail.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary"> Contato</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tem um projeto em mente ou gostaria de colaborar? Estou sempre aberto a novas ideias, conexões e oportunidades.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Fale Comigo</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">E-mail</h4>
                  <a href="mailto:Lacerda_contato@outlook.com" className="text-muted-foreground hover:text-primary transition-colors">
                    Lacerda_contato@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Telefone</h4>
                  <a href="tel:+5511946799119" className="text-muted-foreground hover:text-primary transition-colors">
                    +55 (11) 94679-9119
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Localização</h4>
                  <span className="text-muted-foreground">São Paulo, Brasil</span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center md:text-left">Conecte-se comigo</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/rafael-lacerd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-110">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/Taff4" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-110">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-6">Enviar mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">Seu nome</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Pedro Machado..." />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">Seu e-mail</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="pedro@exemplo.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-left">Sua mensagem</label>
                <textarea id="message" name="message" required rows="4" className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Olá, gostaria de falar sobre..."/>
              </div>
              <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                {!isSubmitting && <Send size={16} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};