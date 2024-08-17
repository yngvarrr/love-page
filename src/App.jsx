import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import pic from "./assets/pic.jpeg";
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
            <Fab variant="extended" color="primary" onClick={scrollToSection2}>
              <FavoriteIcon sx={{ mr: 1 }} />
              Go to Section 2
            </Fab>
          </Box>
        </Box>

        {/* Segunda Seção */}
        <div ref={section2Ref} style={{ height: "100vh", background: "lightgreen", padding: "20px" }}>
          <h1>Section 2</h1>
          <Fab variant="extended" color="primary" onClick={scrollToSection3}>
            <FavoriteIcon sx={{ mr: 1 }} />
            Go to Section 3
          </Fab>
        </div>

        {/* Terceira Seção */}
        <div ref={section3Ref} style={{ height: "100vh", background: "lightcoral", padding: "20px" }}>
          <h1>Section 3</h1>
          <Fab variant="extended" color="primary" onClick={scrollToSection4}>
            <FavoriteIcon sx={{ mr: 1 }} />
            Go to Section 4
          </Fab>
        </div>

        {/* Quarta Seção */}
        <div ref={section4Ref} style={{ height: "100vh", background: "lightgoldenrodyellow", padding: "20px" }}>
          <h1>Section 4</h1>
          {/* Opcional: botão para rolar de volta ao topo */}
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
