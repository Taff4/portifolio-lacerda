import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { SplashScreen } from "./components/SplashScreen.jsx";
import { StarBackground } from "./components/StarBackground.jsx"; // Importe aqui
import { useState } from "react";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [startBgAnimations, setStartBgAnimations] = useState(false);

  const handleSplashEnd = () => {
    setShowSplash(false);
    // Ativa as animações de fundo apenas quando o splash termina
    setStartBgAnimations(true);
  };

  return (
    <BrowserRouter>
      {/* O StarBackground vive aqui, é criado uma vez e nunca destruído. */}
      {/* Ele recebe o estado que controla quando as animações devem começar. */}
      <StarBackground startAnimations={startBgAnimations} />

      {showSplash && <SplashScreen onAnimationEnd={handleSplashEnd} />}

      {!showSplash && (
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;