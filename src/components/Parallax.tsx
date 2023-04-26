import React from "react";
import { ReactNode } from "react";
import './styles/Parallax.scss';
import BackgroundLayer0 from '../background_layers/background_layer_0_1920.png';
import BackgroundLayer1 from '../background_layers/background_layer_1_1920.png';
import BackgroundLayer2 from '../background_layers/background_layer_2_1920.png';
import BackgroundLayer3 from '../background_layers/background_layer_3_1920.png';
import BackgroundLayer4 from '../background_layers/background_layer_4.png';
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

function Parallax({ children } : { children: ReactNode }) {

    return (
        <section className="Home">
            <ParallaxProvider>
                <ParallaxBanner
                    className="parallax-banner"
                    layers={[
                        {
                            image: BackgroundLayer0,
                            translateY: [0, 35, 'easeOutSine'],
                            
                            shouldAlwaysCompleteAnimation: true,
                            expanded: false
                        },
                        {
                            image: BackgroundLayer1,
                            translateY: [0, 30, 'easeOutSine'],

                            shouldAlwaysCompleteAnimation: true,
                            expanded: false
                        },
                        {
                            children,
                            style: {position: "fixed"}
                        },
                        {
                            image: BackgroundLayer2,
                            translateY: [0, 17, 'easeOutSine'],

                            shouldAlwaysCompleteAnimation: true,
                            expanded: false
                        },
                        {
                            image: BackgroundLayer3,
                            translateY: [0, 10, 'easeOutSine'],

                            shouldAlwaysCompleteAnimation: true,
                            expanded: false,
                        },
                        {
                            image: BackgroundLayer4,
                            translateY: [0, 2, 'easeOutSine'],

                            shouldAlwaysCompleteAnimation: true,
                            expanded: false,
                        }
                    ]}
                />
            </ParallaxProvider>
        </section>
    );
};

export default Parallax;
