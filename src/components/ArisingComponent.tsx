import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";

const ArisingComponent = (props: PropsWithChildren<{ scrollOffset: Number, className: string | undefined }>): JSX.Element => {
    const targetRef = useRef();
    const [offsetTop, setOffset] = useState(0);
    
    useEffect(() => {
        setOffset(targetRef.current.offsetTop + 150);
    }, []);

    return (
        <div ref={targetRef}>
            <Parallax
                className={props.className}
                easing={'easeOutSine'}
                translateY={['100px', '0px']}
                opacity={[0.3, 1]}
                startScroll={offsetTop}
                endScroll={offsetTop + props.scrollOffset}
            >
                {props.children}
            </Parallax>
        </div>
    );
};

export default ArisingComponent;