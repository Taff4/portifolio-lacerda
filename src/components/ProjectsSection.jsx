import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// ... (seu array de projetos permanece o mesmo) ...
const projects = [ 
  {id:1,title:"Cyclistic Bike Share",description:"Análise de 31M+ viagens para insights de uso e clientes. Ferramentas: Python, Power BI, SQL, Excel.",image:"/projects/capa.png",tags:["Análise de Dados","Python","Power BI"],demoUrl:"#",githubUrl:"https://github.com/Taff4/Cyclistic-Bike-Share-Analysis",status:"Em Construção"},{id:2,title:"Projeto Kathlon",description:"Website moderno e responsivo para uma empresa de tecnologia.",image:"/projects/kathon.png",tags:["HTML","CSS","JavaScript"],demoUrl:"https://taff4.github.io/site-kathlon/",githubUrl:"https://github.com/Taff4/site-kathlon"},{id:3,title:"SaaS Landing Page",description:"Landing page elegante e responsiva com React e Tailwind CSS.",image:"/projects/project1.png",tags:["React","TailwindCSS","Supabase"],demoUrl:"#",githubUrl:"#",status:"Em Breve"},{id:4,title:"Jogo da Forca em C",description:"Um clássico jogo da forca implementado em C.",image:"/projects/Forca.png",tags:["C","Game Development","Logic"],demoUrl:"#",githubUrl:"https://github.com/Taff4/jogo_da_forca.c"},{id:5,title:"Orbit Analytics Dashboard",description:"Dashboard de análise interativo com visualização de dados.",image:"/projects/project2.png",tags:["TypeScript","D3.js","Next.js"],demoUrl:"#",githubUrl:"#",status:"Em Breve"},{id:6,title:"Pedra, Papel e Tesoura",description:"Implementação simples do jogo clássico para navegadores web.",image:"/projects/Pedra papel e tesoura.png",tags:["HTML","CSS","JavaScript","Game"],demoUrl:"https://taff4.github.io/Pedra-Papel-Tesoura/",githubUrl:"https://github.com/Taff4/Pedra-Papel-Tesoura"},{id:7,title:"E-commerce Platform",description:"Plataforma de e-commerce completa com autenticação e pagamentos.",image:"/projects/project3.png",tags:["React","Node.js","Stripe"],demoUrl:"#",githubUrl:"#",status:"Em Breve"},{id:8,title:"Sistema de Vendas e Pesagem em C",description:"Sistema de gerenciamento de vendas e pesagem em C.",image:"/projects/viva.png",tags:["C","System Development","CLI"],demoUrl:"#",githubUrl:"https://github.com/Taff4/PIM-Hortifruti-2.0---Sistema-de-Vendas-e-Pesagem"},{id:9,title:"QA Práticas em Testes",description:"Projeto prático de QA com testes manuais, API e automação com Selenium em Python.",image:"/projects/qa.png",tags:["QA","Selenium","Python","Postman"],demoUrl:"#",githubUrl:"https://github.com/Taff4/qa-praticas-rafael"}
];

// Variantes de animação para a entrada dos cards na tela
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

// Variantes de animação para o overlay e seus ícones
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 },
  }),
};

const ProjectCard = ({ project, i }) => {
  const [isInteracted, setIsInteracted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <motion.div
      className="group bg-card rounded-lg overflow-hidden shadow-sm relative border border-border"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={i}
      // Lógica de interação para hover (desktop) e toque (mobile)
      onHoverStart={() => !isMobile && setIsInteracted(true)}
      onHoverEnd={() => !isMobile && setIsInteracted(false)}
      onClick={() => isMobile && setIsInteracted(!isInteracted)}
    >
      <div className="relative">
        <div className="aspect-[16/9] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover ${project.status ? 'grayscale' : ''}`}
            // Efeito de zoom na imagem
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        {/* Overlay com AnimatePresence para controlar a animação de entrada e saída */}
        <AnimatePresence>
          {isInteracted && (
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-6"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                variants={iconVariants} custom={1}
                className={`p-3 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary transition-all duration-300 ${project.demoUrl === '#' || project.status ? 'pointer-events-none opacity-50' : ''}`}
                aria-label="Live Demo" onClick={(e) => e.stopPropagation()}>
                <ExternalLink size={24} />
              </motion.a>
              <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                variants={iconVariants} custom={2}
                className={`p-3 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary transition-all duration-300 ${project.githubUrl === '#' || project.status ? 'pointer-events-none opacity-50' : ''}`}
                aria-label="GitHub Repository" onClick={(e) => e.stopPropagation()}>
                <Github size={24} />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {project.status && (
        <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
          {project.status}
        </span>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Meus <span className="text-primary"> Projetos </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore uma seleção dos meus trabalhos. Passe o mouse sobre um card (ou toque, no mobile) para ver os links.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>
        <div className="text-center mt-16">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" rel="noopener noreferrer" href="https://github.com/Taff4">
            Confira meu GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
