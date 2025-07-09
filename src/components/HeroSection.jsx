import { ArrowDown, Github, Linkedin, Code, GraduationCap, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 1. VARIANTES DE ANIMAÇÃO COM FRAMER-MOTION
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso entre a animação de cada filho
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const HeroSection = () => {
  const fullText = "Oi, eu sou Rafael Lacerda";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // ... (sua lógica de digitação useEffect permanece a mesma)
    let i = 0; let intervalId; let timeoutId;
    const type = () => {
      intervalId = setInterval(() => {
        i++; setDisplayedText(fullText.slice(0, i));
        if (i === fullText.length) { clearInterval(intervalId); setIsTyping(false); timeoutId = setTimeout(() => { deleteText(); }, 4000); }
      }, 120);
    };
    const deleteText = () => {
      let d = fullText.length; setIsTyping(true);
      intervalId = setInterval(() => {
        d--; setDisplayedText(fullText.slice(0, d));
        if (d === 0) { clearInterval(intervalId); timeoutId = setTimeout(() => { i = 0; type(); }, 1500); }
      }, 60);
    };
    type();
    return () => { clearInterval(intervalId); clearTimeout(timeoutId); };
  }, []);

  const prefix = "Oi, eu sou ";
  const namePart = displayedText.startsWith(prefix) ? displayedText.slice(prefix.length) : "";
  const firstSpaceIndex = namePart.indexOf(" ");
  const firstName = firstSpaceIndex === -1 ? namePart : namePart.slice(0, firstSpaceIndex);
  const lastName = firstSpaceIndex === -1 ? "" : namePart.slice(firstSpaceIndex);
  const fixedPartVisible = displayedText.length >= prefix.length;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        {/* 2. APLICANDO AS VARIANTES DE ANIMAÇÃO */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Item 1: Título */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight">
            <span>{fixedPartVisible ? prefix : displayedText}</span>
            {fixedPartVisible && (
              <>
                <span className="text-primary">{firstName}</span>
                <span className="text-gradient">{lastName}</span>
              </>
            )}
            <span className={`inline-block ml-1 opacity-75 ${isTyping ? "animate-pulse" : "[animation:blink_1s_step-start_infinite]"}`}>|</span>
          </motion.h1>

          {/* Item 2: Sub-título com Pílulas de Informação */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2 border border-border rounded-full px-3 py-1 bg-card/50">
              <Code size={16} className="text-primary" />
              <span>Desenvolvedor Front-end</span>
            </div>
            <div className="flex items-center gap-2 border border-border rounded-full px-3 py-1 bg-card/50">
              <GraduationCap size={16} className="text-primary" />
              <span>Análise e Desenv. de Sistemas</span>
            </div>
            <div className="flex items-center gap-2 border border-border rounded-full px-3 py-1 bg-card/50">
              <Sparkles size={16} className="text-primary" />
              <span>Focado em Tecnologias Modernas</span>
            </div>
          </motion.div>

          {/* Item 3: Botões de Ação */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#projects" className="cosmic-button w-full sm:w-auto">
              Veja meus projetos
            </a>
            <a href="#contact" className="secondary-button w-full sm:w-auto">
              Entre em Contato
            </a>
          </motion.div>

          {/* Item 4: Redes Sociais */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6 pt-4">
            <a href="https://github.com/Taff4" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rafael-lacerd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};