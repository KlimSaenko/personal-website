import React from "react";
import './styles/ParallaxHome.scss';
import BackgroundLayer0 from '../background_layers/background_layer_0_1920.png';
import BackgroundLayer1 from '../background_layers/background_layer_1_1920.png';
import BackgroundLayer2 from '../background_layers/background_layer_2_1920.png';
import BackgroundLayer3 from '../background_layers/background_layer_3_1920.png';
import BackgroundLayer4 from '../background_layers/background_layer_4.png';
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { ListItemIcon, Typography } from "@mui/material";
import { FileOpenRounded, GitHub, LinkedIn, Instagram } from '@mui/icons-material';

function ParallaxHome() {

    return (
        <section className="Home">
            <ParallaxBanner className="parallax-banner">

                <ParallaxBannerLayer
                    image={BackgroundLayer0}
                    easing={[0.205, 0.295, 0.520, 0.905]}
                    translateY={[0, 50]}
                    shouldAlwaysCompleteAnimation={true}
                    expanded={false}
                />

                <ParallaxBannerLayer
                    image={BackgroundLayer1}
                    easing={[0.205, 0.295, 0.520, 0.905]}
                    translateY={[0, 35]}
                    shouldAlwaysCompleteAnimation={true}
                    expanded={false}
                />

                <ParallaxBannerLayer
                    translateY={[0, 70]}
                    shouldAlwaysCompleteAnimation={true}
                    expanded={false}
                >
                    <div className="home-page-primary">
                        <Typography variant="h2" color="home.main">
                            <span className="colored-letter">H</span>i!
                        </Typography>
                        <Typography variant="h2" color="home.main">
                            I`m <span className="colored-letter">K</span>limentsi <span className="colored-letter">S</span>aenko
                        </Typography>
                    </div>
                </ParallaxBannerLayer>
                
                <ParallaxBannerLayer
                    image={BackgroundLayer2}
                    easing={[0.205, 0.295, 0.520, 0.905]}
                    translateY={[0, 15]}
                    shouldAlwaysCompleteAnimation={true}
                    expanded={false}
                />

                <ParallaxBannerLayer
                    translateY={[0, 62]}
                    shouldAlwaysCompleteAnimation={true}
                    expanded={false}
                >
                    <div className="home-page-primary">
                        <div className="buttons-container">
                            <div className="download-cv-button blur-button">
                                <a href="http://localhost:3000/" target="_blank" rel="noreferrer" className="inner-button">
                                    <Typography variant="h5" color="primary">
                                        GET CV
                                    </Typography>
                                    <ListItemIcon>
                                        <FileOpenRounded />
                                    </ListItemIcon>
                                </a>
                            </div>

                            <div className="social-links-container">
                                <div className="blur-button">
                                    <a href="http://localhost:3000/" target="_blank" rel="noreferrer" className="social-link inner-button">
                                        <ListItemIcon>
                                            <GitHub />
                                        </ListItemIcon>
                                    </a>
                                </div>

                                <div className="blur-button">
                                    <a href="http://localhost:3000/" target="_blank" rel="noreferrer" className="social-link inner-button">
                                        <ListItemIcon>
                                            <LinkedIn />
                                        </ListItemIcon>
                                    </a>
                                </div>

                                <div className="blur-button">
                                    <a href="http://localhost:3000/" target="_blank" rel="noreferrer" className="social-link inner-button">
                                        <ListItemIcon>
                                            <Instagram />
                                        </ListItemIcon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxBannerLayer>

                <ParallaxBannerLayer
                    image={BackgroundLayer3}
                    easing={[0.205, 0.295, 0.520, 0.905]}
                    translateY={[0, 8]}
                    shouldAlwaysCompleteAnimation={true}
                    expanded={false}
                    style={{pointerEvents: "none"}}
                    children={
                        <div className="bottom-ifno">
                            <Typography color="info.main">
                                Built from scratch by me.
                            </Typography>
                        </div>
                    }
                />

                <ParallaxBannerLayer
                    image={BackgroundLayer4}
                    easing={[0.205, 0.295, 0.520, 0.905]}
                    translateY={[0, 2]}
                    shouldAlwaysCompleteAnimation={true}
                    expanded={false}
                    style={{pointerEvents: "none"}}
                />
                
            </ParallaxBanner>
        </section>
    );
};

export default ParallaxHome;
