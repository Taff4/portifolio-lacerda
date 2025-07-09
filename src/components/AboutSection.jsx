import { Briefcase, Code, Download, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Variantes de animação
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const AboutSection = () => {
  const [tappedCard, setTappedCard] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleTap = (index) => {
    if (isMobile) {
      setTappedCard(tappedCard === index ? null : index);
    }
  };

  return (
    <section id="about" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Bloco principal de animação para o título e a intro */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Sobre <span className="text-primary">Mim</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Minha jornada, minhas paixões e como transformo ideias em realidade digital.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-20">
            {/* Foto de Perfil */}
            <motion.div
              className="md:col-span-1 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 group">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse-subtle group-hover:blur-2xl transition-all duration-500"></div>
                <img
                  src="/projects/1713255901780.png"
                  alt="Foto de perfil de Rafael Lacerda"
                  className="relative w-full h-full object-cover rounded-full border-4 border-card transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Texto de Apresentação */}
            <motion.div
              className="md:col-span-2 space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold">
                Movido pela curiosidade, guiado pelo código.
              </h3>
              <p className="text-muted-foreground">
                Minha jornada na tecnologia começou com uma simples pergunta: "como isso funciona?". Hoje, como estudante de Análise e Desenvolvimento de Sistemas, transformo essa curiosidade em soluções digitais. Sou fascinado pelo processo de dar vida a uma ideia, desde o primeiro esboço no Figma até a última linha de código.
              </p>
              <p className="text-muted-foreground">
                Meu foco é construir experiências de usuário que sejam não apenas funcionais, mas também intuitivas e agradáveis. Para mim, um bom projeto é aquele que equilibra um design limpo, um código eficiente e, acima de tudo, resolve um problema real para o usuário.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Seção de Cards de Especialidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Code className="h-7 w-7 text-primary" />, title: "Desenvolvimento Front-end", description: "Criação de interfaces interativas e responsivas com React, Next.js e Tailwind CSS, garantindo uma experiência de usuário fluida e moderna." },
            { icon: <User className="h-7 w-7 text-primary" />, title: "Design de Interfaces (UI)", description: "Foco em layouts limpos e intuitivos, transformando conceitos em interfaces visualmente atraentes e fáceis de usar." },
            { icon: <Briefcase className="h-7 w-7 text-primary" />, title: "Testes e Qualidade (QA)", description: "Aplicação de práticas de QA, desde testes manuais até automação com Selenium, para garantir a robustez e a confiabilidade dos projetos." },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className={cn(
                "gradient-border p-8 card-hover text-center flex flex-col transition-transform duration-300",
                isMobile && tappedCard === i && "scale-[1.02] shadow-lg shadow-primary/10"
              )}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={i}
              onClick={() => handleTap(i)}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10">{card.icon}</div>
              </div>
              <h4 className="font-semibold text-lg mb-2">{card.title}</h4>
              <p className="text-muted-foreground text-sm flex-grow">{card.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* --- BOTÃO DE DOWNLOAD MOVIDO PARA O FINAL --- */}
        <motion.div
          className="text-center mt-16" // Adicionada margem superior para separar dos cards
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://drive.google.com/file/d/1QssHqyJ9qbq53e7ejpZblxhelIsXII5g/view?usp=sharing"
            className="cosmic-button inline-flex items-center justify-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={16} />
            Download Currículo
          </a>
        </motion.div>
      </div>
    </section>
  );
};