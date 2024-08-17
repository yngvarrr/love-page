import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import pic from "./assets/pic.jpeg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Timer from "./components/Timer/Timer";
import "./App.css";

function App() {
  const startDate = '2024-02-16T00:00:00';

  return (
    <>
      <div>
        <Box>
        <img src={pic} alt="" className="foto"/>
        <Timer startDate={startDate} />
        </Box>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab variant="extended" color="primary">
            <FavoriteIcon sx={{ mr: 1 }} />
            Extended
          </Fab>
        </Box>
      </div>
    </>
  );
}

export default App;
