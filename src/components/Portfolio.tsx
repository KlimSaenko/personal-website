import React from "react";
import './styles/Portfolio.scss';
import { Parallax } from "react-scroll-parallax";
import { Typography } from "@mui/material";
import ProjectTile from './ProjectTile.tsx';

const Portfolio = () => {
  return (
    <section className="Portfolio">
      <Typography className="project-name" variant="h2" color="primary.white">
        Project Name
      </Typography>

      <div className="projects">
        <Parallax
          className="content-block"
          easing={'easeOutSine'}
          translateY={['100px', '0px']}
          opacity={[0.3, 1]}
          startScroll={1050}
          endScroll={1400}
        >
          <ProjectTile pos={1} />
        </Parallax>
      </div>
    </section>
  );
};

export default Portfolio;