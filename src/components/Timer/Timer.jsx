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

    // Limpeza do intervalo quando o componente for desmontado
    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <div className="timer">
      <h2>Juntos há</h2>
      <p>{timeElapsed.days || 0} dias, {timeElapsed.hours || 0} horas,{" "}
      {timeElapsed.minutes || 0} minutos e {timeElapsed.seconds || 0} segundos</p>
    </div>
  );
};

export default Timer;
