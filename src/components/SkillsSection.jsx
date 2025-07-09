import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Code, Atom, Server, Database, GitBranch, CheckCircle, FileText, LayoutDashboard,
  Bug, Rocket, Brackets, Type, Palette, Cloud, Waypoints, Bot, Figma
} from "lucide-react";

// O array de skills com descrições permanece o mesmo
const skills = [
  { name: "HTML/CSS", category: "frontend", icon: Code, description: "Estruturação e estilização de interfaces web com padrões modernos." },
  { name: "JavaScript", category: "frontend", icon: Brackets, description: "Desenvolvimento de funcionalidades interativas e dinâmicas para web." },
  { name: "React", category: "frontend", icon: Atom, description: "Criação de componentes reusáveis e Single Page Applications (SPAs)." },
  { name: "TypeScript", category: "frontend", icon: Type, description: "Adição de tipagem estática para código mais robusto e escalável." },
  { name: "Tailwind CSS", category: "frontend", icon: Palette, description: "Estilização rápida e responsiva com classes utilitárias." },
  { name: "Next.js", category: "frontend", icon: Waypoints, description: "Framework React para renderização server-side e aplicações full-stack." },
  { name: "Node.js", category: "backend", icon: Server, description: "Desenvolvimento de APIs e serviços back-end com JavaScript." },
  { name: "Express", category: "backend", icon: Cloud, description: "Criação de APIs RESTful eficientes e flexíveis." },
  { name: "DBeaver", category: "backend", icon: Database, description: "Gerenciamento e consulta de bancos de dados diversos." },
  { name: "SQL", category: "backend", icon: Database, description: "Manipulação e consulta de dados em bancos de dados relacionais." },
  { name: "Testes Manuais", category: "quality-assurance", icon: CheckCircle, description: "Execução de testes funcionais e de usabilidade para garantir a qualidade do software." },
  { name: "Casos de Teste", category: "quality-assurance", icon: FileText, description: "Elaboração de cenários detalhados para validar funcionalidades e requisitos." },
  { name: "Selenium", category: "quality-assurance", icon: Bot, description: "Automação de testes funcionais em navegadores web para simular interações do usuário." },
  { name: "Postman", category: "quality-assurance", icon: Rocket, description: "Testes de API, automação de requisições e validação de endpoints." },
  { name: "Jira", category: "quality-assurance", icon: LayoutDashboard, description: "Gerenciamento de projetos ágeis, rastreamento de bugs e tarefas." },
  { name: "TestLink", category: "quality-assurance", icon: Bug, description: "Ferramenta para gerenciamento de planos de teste e execução de casos de teste." },
  { name: "Lógica de Programação", category: "programming-fundamentals", icon: Brackets, description: "Fundamentos essenciais para resolução de problemas e desenvolvimento de algoritmos." },
  { name: "Python", category: "programming-fundamentals", icon: Code, description: "Linguagem versátil para automação de testes, análise de dados e desenvolvimento backend." },
  { name: "C", category: "programming-fundamentals", icon: Code, description: "Conhecimento em linguagem de programação estruturada." },
  { name: "C++", category: "programming-fundamentals", icon: Code, description: "Conhecimento em linguagem de programação orientada a objetos (nível básico)." },
  { name: "Git & GitHub", category: "tools", icon: GitBranch, description: "Controle de versão, colaboração e gerenciamento de código-fonte." },
  { name: "VS Code", category: "tools", icon: Code, description: "Ambiente de desenvolvimento integrado (IDE) essencial para codificação eficiente." },
  { name: "Figma", category: "tools", icon: Figma, description: "Ferramenta de design de interfaces para prototipação e criação de layouts." },
  { name: "Notion", category: "tools", icon: LayoutDashboard, description: "Organização e gestão de projetos, notas e informações de equipes." },
  { name: "Trello", category: "tools", icon: LayoutDashboard, description: "Gerenciamento visual de tarefas e fluxos de trabalho." },
  { name: "Photoshop", category: "tools", icon: Palette, description: "Edição de imagens, retoques e criação de elementos visuais." },
  { name: "Canva", category: "tools", icon: Palette, description: "Plataforma de design gráfico simplificado para redes sociais e apresentações." },
  { name: "Excel", category: "office-business", icon: LayoutDashboard, description: "Software para análise de dados, criação de planilhas e automação de tarefas." },
  { name: "Power BI", category: "office-business", icon: LayoutDashboard, description: "Ferramenta da Microsoft para business intelligence e visualização de dados." },
  { name: "PowerPoint", category: "office-business", icon: FileText, description: "Software para criação de apresentações profissionais e impactantes." },
  { name: "Word", category: "office-business", icon: FileText, description: "Editor de texto para criação e formatação avançada de documentos." },
  { name: "Sistemas ERP", category: "office-business", icon: Server, description: "Conhecimento em sistemas de planejamento de recursos empresariais." },
];
const categories = [
  { id: "frontend", name: "Front-end" }, { id: "backend", name: "Back-end & Dados" },
  { id: "quality-assurance", name: "Qualidade (QA)" }, { id: "programming-fundamentals", name: "Programação" },
  { id: "tools", name: "Ferramentas & Design" }, { id: "office-business", name: "Business & Office" },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Animação escalonada mais sutil
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Minhas <span className="text-primary">Habilidades</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto -mt-8">
          Passe o mouse sobre uma habilidade para ver mais detalhes. No mobile, basta tocar.
        </p>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16 p-2 bg-card/50 rounded-full border border-border w-fit mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setHoveredSkill(null); // Reseta o tooltip ao trocar de categoria
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-colors duration-300 relative",
                activeCategory === category.id ? "text-primary-foreground" : "text-foreground hover:text-primary"
              )}
            >
              {category.name}
              {activeCategory === category.id && (
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  layoutId="activeSkillPill"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid de Habilidades */}
        <motion.div
          key={activeCategory}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 lg:gap-6"
        >
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="relative"
              variants={chipVariants}
              // Ações de interação
              onHoverStart={() => setHoveredSkill(i)}
              onHoverEnd={() => setHoveredSkill(null)}
              onClick={() => setHoveredSkill(hoveredSkill === i ? null : i)}
            >
              {/* O Ícone da Habilidade */}
              <div
                className={cn(
                  "flex flex-col items-center justify-center p-4 bg-card border rounded-lg aspect-square cursor-pointer transition-all duration-300 w-28 h-28 sm:w-32 sm:h-32",
                  hoveredSkill === i ? "border-primary shadow-lg shadow-primary/20 scale-105" : "border-border"
                )}
              >
                <skill.icon className="h-10 w-10 sm:h-12 sm:h-12 text-primary mb-2 transition-transform duration-300" 
                  style={{ transform: hoveredSkill === i ? 'scale(1.1)' : 'scale(1)' }}
                />
                <span className="text-xs sm:text-sm font-medium text-center text-foreground">{skill.name}</span>
              </div>
              
              {/* O Tooltip/Popover */}
              <AnimatePresence>
                {hoveredSkill === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 z-20 p-3 bg-card text-foreground rounded-lg shadow-xl border border-border"
                  >
                    <p className="text-sm text-left text-muted-foreground">{skill.description}</p>
                    {/* Seta do tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-card" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};