import React from 'react';
import { StyledHomeWrapper, StyledFrameBox, StyledImage, StyledFrame } from "./Home.style"
import bg from "../../img/header.png"


export const Home = () => {
    return (
        <StyledHomeWrapper>
            <StyledImage src={bg} />
            <StyledFrameBox>
                <iframe 
                    width="500" 
                    height="281" 
                    src="https://www.youtube.com/embed/vnIG6LzMnk0?autoplay=1&mute=1" 
                    frameborder="0" 
                    ></iframe>
                <iframe 
                    width="500" 
                    height="281" 
                    src="https://www.youtube.com/embed/hl1U0bxTHbY?autoplay=1&mute=1" 
                    frameborder="0" 
                    >
                </iframe>
            </StyledFrameBox>
        </StyledHomeWrapper>
    )
}