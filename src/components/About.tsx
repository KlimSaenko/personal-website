import React from "react";
import { Typography } from "@mui/material";
import './styles/About.scss';
import { Parallax } from "react-scroll-parallax";

const About = () => {
  return (
    <section className="About padding-center">
      <div className="main-text">
        <Parallax
          easing={'easeOutQuad'}
          translateY={[120, 0]}
          opacity={[0.3, 1]}
        >
          <Typography variant="h1" color="primary">
            Full-Stack Developer
          </Typography>
        </Parallax>
      </div>
    </section>
  );
};

export default About;