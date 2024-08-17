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
import in_love from "./assets/in_love.png";
import expect from "./assets/expect.png";
import love2 from "./assets/love2.png";
import final from "./assets/final.jpeg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Mosaico from "./components/Mosaico/Mosaico";
import Timer from "./components/Timer/Timer";
import "./App.css";

function App() {
  const startDate = "2024-02-16T00:00:00";

  // Referências para as seções
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="containerM">
      <div>
        <Box
          sx={{ height: "100vh", background: "#003366", p: 2, color: "white" }}
        >
          <img src={pic} alt="" className="foto" />
          <h1>Oi amor!</h1>
          <p>Bastante tempo que estamos juntos ne? Vamos fazer uma viagem!</p>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <img src={love} alt="" className="emoji" />
            <Fab variant="extended" color="primary" onClick={() => scrollToSection(section2Ref)}>
              <FavoriteIcon sx={{ mr: 1 }} />
              Como tudo começou
            </Fab>
          </Box>
        </Box>

        <div
          ref={section2Ref}
          style={{ height: "100vh", background: "#006400", padding: "20px" }}
        >
          <h1>Como tudo começou...</h1>
          <p>
            Depois de meses interagindo e dando em cima, decidi tomar atitude de
            chamar aquela gata pra sair!
          </p>
          <img className="print" src={first} alt="" />
          <img src={scared} alt="" className="emoji" />
          <Fab variant="extended" color="primary" onClick={() => scrollToSection(section3Ref)}>
            <FavoriteIcon sx={{ mr: 1 }} />
            Ta mas e ai????
          </Fab>
        </div>

        <div
          ref={section3Ref}
          style={{ height: "100vh", background: "lightcoral", padding: "20px" }}
        >
          <h1>Triste...</h1>
          <p>
            Infelizmente, a futura mestra estava muito ocupada e não deu pra
            marcar nosso primeiro date...
          </p>
          <img src={shocked} alt="" className="emoji" />
          <h2>PORÉM!!!!</h2>
          <p>A esperança é a última que morre...</p>
          <img src={shy} alt="" className="emoji" />
          <Fab variant="extended" color="primary" onClick={() => scrollToSection(section4Ref)}>
            <FavoriteIcon sx={{ mr: 1 }} />
            hmmmmm e agora então?
          </Fab>
        </div>

        <div
          ref={section4Ref}
          style={{ height: "100vh", background: "#C90505", padding: "20px" }}
        >
          <h1>Plot Twist!!!</h1>
          <p>
            Pelo visto, ela tava interessada nesse date, e algumas semanas
            depois...
          </p>
          <img src={second} alt="" className="print" />
          <p>
            E então, nosso primeiro date estaria marcado, 14 de outubro era o
            grande dia do meu primeiro encontro!!!!
          </p>
          <img src={happy} alt="" className="emoji" />
          <Fab variant="extended" color="primary" onClick={() => scrollToSection(section5Ref)}>
            <FavoriteIcon sx={{ mr: 1 }} />
            Massa!!!!!! e ai?????
          </Fab>
        </div>

        <div
          ref={section5Ref}
          style={{ height: "100vh", background: "#4A5568", padding: "20px" }}
        >
          <h1>Finalmente!!!!</h1>
          <p>
            O encontro foi incrível, conversamos bastante e acabamos ficando
          </p>
          <img src={in_love} alt="" className="emoji" />
          <p>E assim continuamos por 4 incríveis meses, até que...</p>
          <img src={expect} alt="" className="emoji" />
          <Fab variant="extended" color="primary" onClick={() => scrollToSection(section6Ref)}>
            <FavoriteIcon sx={{ mr: 1 }} />
            Ate que o que????????
          </Fab>
        </div>

        <div
          ref={section6Ref}
          style={{ height: "100vh", background: "#2C3E50", padding: "20px" }}
        >
          <h1>Viramos um casal de fato!</h1>
          <p>
            Depois de mais de 4 meses junto com você, não restava absolutamente
            nenhuma dúvida de que eu te queria como minha namorada, minha
            parceira e melhor amiga!
          </p>
          <img src={love2} alt="" className="emoji" />
          <Fab variant="extended" color="primary" onClick={() => scrollToSection(section7Ref)}>
            <FavoriteIcon sx={{ mr: 1 }} />
            aeeee, deu tudo certo, mas só isso?
          </Fab>
        </div>

        <div
          ref={section7Ref}
          style={{ height: "100vh", background: "#8A9BAE", padding: "20px" }}
        >
          <h1>Claro que não!!!!</h1>
          <p>
            Como um casal, vivemos muitas coisas que eu nunca imaginava viver e
            construímos boas memórias juntos!
          </p>
          <Mosaico />
          <Fab variant="extended" color="primary" onClick={() => scrollToSection(section8Ref)}>
            <FavoriteIcon sx={{ mr: 1 }} />
            O futuro
          </Fab>
        </div>

        <div
          ref={section8Ref}
          style={{ height: "108vh", background: "#003366", padding: "20px" }}
        >
          <h1>Apenas o começo</h1>
          <p></p>
          <Timer startDate={startDate} />
          <img src={final} alt="" className="foto" />
          <h3>Te amo meu amor, obrigado por tanto, você é minha eterna fração de segundo!</h3>
        </div>
      </div>
    </section>
  );
}

export default App;
