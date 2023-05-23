import React from "react";
import { Typography } from "@mui/material";
import './styles/About.scss';
import ArisingComponent from './ArisingComponent.tsx';

const tags = [ 'UI', 'UX', 'BACKEND', 'FRONTEND', 'SQL', 'C#' ];

const About = () => {
  return (
    <section className="About">
      <ArisingComponent scrollOffset={300}  className="content-block">
        <Typography variant="h1" color="primary">
          Full-Stack Developer
        </Typography>
      </ArisingComponent>
      
      <div className="main-text">
        <ArisingComponent scrollOffset={300}  className="content-block">
          <Typography variant="h5" color="primary">
            UX/UI Designer and Artistic Director based in Aix-en-Provence, France.
            Passionate about the design of User Interface, linking interactivity and user experience. I had the privilege of working with major brands, agencies and remarkable people for more than 20 years and thus be able to broaden my skills in different areas of design, digital and print.
          </Typography>
        </ArisingComponent>

        <ArisingComponent scrollOffset={300} className="tags-section">
          <div className="content-block">
            <Typography variant="h3" color="primary">
              Skills
            </Typography>

            <div className="tags-container">
              {tags.map((x, index) =>
                <div key={index} className="tag-interactive">
                  <Typography variant="tag" color="primary">
                    {x}
                  </Typography>
                </div>
              )}
            </div>
          </div>

          <div className="content-block">
            <Typography variant="h3" color="primary">
              Tools
            </Typography>

            <div className="tags-container">
              {tags.map((x, index) =>
                <div key={index} className="tag-interactive">
                  <Typography variant="tag" color="primary">
                    {x}
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </ArisingComponent>
      </div>
    </section>
  );
};

export default About;