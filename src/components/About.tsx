import React from "react";
import { Typography } from "@mui/material";
import './styles/About.scss';
import { Parallax } from "react-scroll-parallax";

const tags = [ 'UI', 'UX', 'BACKEND', 'FRONTEND', 'SQL', 'C#' ];

const About = () => {
  return (
    <section className="About">
      <Parallax
        className="content-block"
        easing={'easeOutSine'}
        translateY={[120, 0]}
        opacity={[0.3, 1]}
        startScroll={180}
        endScroll={640}
      >
        <Typography variant="h1" color="primary">
          Full-Stack Developer
        </Typography>
      </Parallax>

      <div className="main-text">
        <Parallax
          className="content-block"
          easing={'easeOutQuad'}
          translateY={[120, 0]}
          opacity={[0.3, 1]}
          startScroll={180}
          endScroll={640}
        >
          <Typography variant="h5" color="primary">
            UX/UI Designer and Artistic Director based in Aix-en-Provence, France.
            Passionate about the design of User Interface, linking interactivity and user experience. I had the privilege of working with major brands, agencies and remarkable people for more than 20 years and thus be able to broaden my skills in different areas of design, digital and print.
          </Typography>
        </Parallax>

        <Parallax
          className="content-block"
          easing={'easeOutQuad'}
          translateY={[120, 0]}
          opacity={[0.3, 1]}
          startScroll={180}
          endScroll={640}
        >
          <Typography variant="h3" color="primary">
            Skills
          </Typography>

          <div className="tags-container">
            {tags.map((x, index) =>
              <div key={index} className="tag-interactive">
                <Typography variant="h5" color="primary">
                  {x}
                </Typography>
              </div>
            )}
          </div>
        </Parallax>

        <Parallax
          className="content-block"
          easing={'easeOutQuad'}
          translateY={[120, 0]}
          opacity={[0.3, 1]}
          startScroll={180}
          endScroll={640}
        >
          <Typography variant="h3" color="primary">
            Tools
          </Typography>

          <div className="tags-container">
            {tags.map((x, index) =>
              <div key={index} className="tag-interactive">
                <Typography variant="h5" color="primary">
                  {x}
                </Typography>
              </div>
            )}
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default About;