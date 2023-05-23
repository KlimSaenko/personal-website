import React from "react";
import './styles/Portfolio.scss';
import { Typography } from "@mui/material";
import ProjectTile from './ProjectTile.tsx';
import ArisingComponent from './ArisingComponent.tsx';

const Portfolio = () => {
  return (
    <section className="Portfolio">
      <Typography className="projects-title" variant="h2" color="primary.white">
        Projects
      </Typography>

      <div className="projects">
        <ArisingComponent scrollOffset={300} className="content-block">
          <ProjectTile pos={1} />
        </ArisingComponent>
      </div>
    </section>
  );
};

export default Portfolio;