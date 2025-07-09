import { useEffect, useState } from 'react';
import { StarBackground } from '@/components/StarBackground';
import { cn } from '@/lib/utils';

export const SplashScreen = ({ onAnimationEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Aplica o tema imediatamente
    try {
      const storedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.error("Erro ao aplicar tema no Splash:", e);
    }

    // Timers para a sequência de animação
    const textTimer = setTimeout(() => setShowText(true), 100);
    const fadeOutTimer = setTimeout(() => setFadeOut(true), 3500);
    const endTimer = setTimeout(() => onAnimationEnd(), 4000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(endTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center",
        "bg-background transition-opacity duration-500",
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* O StarBackground aqui NÃO anima, corrigindo o bug dos meteoros */}
      <StarBackground startAnimations={false} />

      {/* Conteúdo Central */}
      <div className="text-center relative z-10 w-full max-w-sm px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 overflow-hidden">
          <span className={cn("inline-block transition-transform duration-700 ease-out", showText ? "translate-y-0" : "translate-y-full")}>
            Rafael
          </span>
          <span className={cn("text-primary inline-block transition-transform duration-700 ease-out delay-100", showText ? "translate-y-0" : "translate-y-full")}>
             Lacerda
          </span>
        </h1>
        
        {/* Barra de Carregamento */}
        <div className="relative w-full h-1 bg-foreground/10 rounded-full mt-6 overflow-hidden">
          <div className={cn("absolute top-0 left-0 h-full bg-primary rounded-full", showText && "loading-bar-fill")}/>
        </div>
      </div>
    </div>
  );
};