import React from "react";
import './styles/Home.scss';
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="home-page-primary">
      <Typography variant="h2" color="primary">
          Hi!
      </Typography>
      <Typography variant="h2" color="primary">
          I`m Klimentsi Saenko
      </Typography>
    </div>
  );
};

export default Home;