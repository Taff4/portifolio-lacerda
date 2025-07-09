import { useState, useEffect } from 'react';

/**
 * Hook customizado para detectar o tamanho da tela e responder a media queries.
 * @param {string} query - A string da media query (ex: "(max-width: 768px)").
 * @returns {boolean} - Retorna true se a media query corresponder, senão false.
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Garante que o código só rode no lado do cliente
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    // Usar 'addEventListener' em vez do obsoleto 'addListener'
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};