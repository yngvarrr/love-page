import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import pic from "./assets/pic.jpeg";
import love from "./assets/love.png";
import first from "./assets/first.jpeg";
import scared from "./assets/scared.png";
import second from "./assets/second.jpeg";
import shy from "./assets/shy.png";
import happy from "./assets/happy.png";
import shocked from "./assets/shocked.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Timer from "./components/Timer/Timer";
import "./App.css";

function App() {
  const startDate = "2024-02-16T00:00:00";

  // Referências para as seções
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection2 = () => {
    section2Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection3 = () => {
    section3Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection4 = () => {
    section4Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        {/* Primeira Seção com cor de fundo mais escura */}
        <Box sx={{ height: "100vh", background: "#003366", p: 2, color: "white" }}>
          <img src={pic} alt="" className="foto" />
          <Timer startDate={startDate} />
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <img src={love} alt="" className="emoji" />
            <Fab variant="extended" color="primary" onClick={scrollToSection2}>
              <FavoriteIcon sx={{ mr: 1 }} />
              Nossa história
            </Fab>
          </Box>
        </Box>

        <div ref={section2Ref} style={{ height: "100vh", background: "#006400", padding: "20px" }}>
          <h1>Como tudo começou...</h1>
          <p>Depois de meses interagindo e dando em cima, decidi tomar atitude de chamar aquela gata pra sair!</p>
          <img className="print" src={first} alt="" srcset="" />
          <img src={scared} alt="" srcset="" className="emoji" />
          <Fab variant="extended" color="primary" onClick={scrollToSection3}>
            <FavoriteIcon sx={{ mr: 1 }} />
            Ta mas e ai????
          </Fab>
        </div>

        <div ref={section3Ref} style={{ height: "100vh", background: "lightcoral", padding: "20px" }}>
          <h1>Section 3</h1>
          <p>Infelizmente, a futura mestra estava muito ocupada e não deu pra marcar nosso primeiro date...</p>
          <img src={scared} alt="" srcset="" className="emoji" />
          <h2>PORÉM!!!!</h2>
          <p>A esperança é a última que morre...</p>
          <img src={shy} alt="" className="emoji"/>
          <Fab variant="extended" color="primary" onClick={scrollToSection4}>
            <FavoriteIcon sx={{ mr: 1 }} />
            hmmmmm e agora então?
          </Fab>
        </div>

        <div ref={section4Ref} style={{ height: "100vh", background: "#C90505", padding: "20px" }}>
          <h1>Section 4</h1>
          <p>Pelo visto, ela tava interessada nesse date, e algumas semanas depois...</p>
          <img src={second} alt="" className="print"/>
          <p>E então, nosso primeiro date estaria marcado, 14 de outubro era o grande dia do meu primeiro encontro!!!!</p>
          <img src={happy} alt="" className="emoji"/>
          <Fab variant="extended" color="primary" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <FavoriteIcon sx={{ mr: 1 }} />
            Back to Top
          </Fab>
        </div>
      </div>
    </>
  );
}

export default App;
