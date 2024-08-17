import React from "react";
import "./mosaico.css";
import Grid from "@mui/material/Grid";
import date from "../../assets/date.jpeg";
import mestr from "../../assets/mestr.jpeg";
import forro from "../../assets/forro.jpeg";
import make from "../../assets/make.jpeg";

const Mosaico = () => {
  return (
    <div className="mosaic-container">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={date} alt="Image 1" className="mosaic-image" />
        </Grid>
        <Grid item xs={6}>
          <img src={mestr} alt="Image 2" className="mosaic-image" />
        </Grid>
        <Grid item xs={6}>
          <img src={make} alt="Image 3" className="mosaic-image" />
        </Grid>
        <Grid item xs={6}>
          <img src={forro} alt="Image 4" className="mosaic-image" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Mosaico;
