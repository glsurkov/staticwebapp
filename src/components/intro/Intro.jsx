import React from 'react';
import Container from "../Container";
import '../../styles/style.css'
import IntroInner from "./IntroInner";

const Intro = () => {
    return (
        <div className="intro">
            <Container contain = {<IntroInner/>}/>
        </div>
    );
};

export default Intro;