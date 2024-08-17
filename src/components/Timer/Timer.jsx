import React, { useState, useEffect } from "react";
import "./timer.css";

const Timer = ({ startDate }) => {
  const calculateTimeElapsed = () => {
    const now = new Date();
    const start = new Date(startDate);

    const difference = +now - +start;
    let timeElapsed = {};

    if (difference > 0) {
      timeElapsed = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeElapsed;
  };

  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <div className="timer">
      <p>Por {timeElapsed.days || 0} dias, {timeElapsed.hours || 0} horas,{" "}
      {timeElapsed.minutes || 0} minutos e {timeElapsed.seconds || 0} segundos, você me proporcionou muitas coisas novas, várias experiências que eu sempre quis viver com alguém que eu amasse e esteve comigo em meus altos e baixos.</p>
      <p>Eu posso não ser perfeito, mas com certeza estou sempre dando o melhor que posso para ser tudo que uma mulher como você merece! E que continuemos sendo muito felizes e apaixonados por mais outros milhões de minutos, e com eles possamos construir coisas cada vez mais incríveis juntos!</p>
    </div>
  );
};

export default Timer;
