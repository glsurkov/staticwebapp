import React from 'react';
import Container from "../Container";
import '../../styles/style.css'
import IntroInner from "./IntroInner";

const Intro = ({show}) => {

    return (
        <div className="intro">
            <Container contain = {<IntroInner show = {show}/>}/>
        </div>
    );
};

export default Intro;