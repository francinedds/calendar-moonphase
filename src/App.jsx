import React, { useState, useEffect } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faCircleHalfStroke, faCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [moonPhase, setMoonPhase] = useState("");
  const [moonIcon, setMoonIcon] = useState(null); // Mude o estado inicial para null ou um ícone padrão
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    let phase = "";
    let icon = null; // Inicialize com null

    if (currentDay <= 7) {
      phase = "Lua Nova";
      icon = faMoon; 
    } else if (currentDay > 7 && currentDay <= 14) {
      phase = "Crescente";
      icon = faCircleHalfStroke;
    } else if (currentDay > 14 && currentDay <= 21) {
      phase = "Cheia";
      icon = faCircle; 
    } else {
      phase = "Minguante";
      icon = faCircleNotch;
    }

    setMoonPhase(phase);
    setMoonIcon(icon);

    setLoading(false);
  }, []);

  return (
    <div className="App">
      <div className="card">
        <h3>DESTINATION</h3>
        <h1>Moon</h1>
        {loading ? ( <p>Carregando...</p>) : (
          <>
            <h2>
              {new Date().toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </h2>
            <p><span>Fase da lua:</span> {moonPhase}</p>
            {moonIcon && (
              <FontAwesomeIcon icon={moonIcon} className="moon-icon" />
            )}{" "}
          </>
        )}
        <a
          href="https://www.diferenca.com/fases-da-lua/" target="_blank" rel="noopener noreferrer" className="moon-button">
            Saiba mais
        </a>
      </div>
    </div>
  );
}

export default App;
