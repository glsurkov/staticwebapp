import React from 'react';
import '../../styles/style.css'
import Button from "./Button";
import Title from "./Title";

const IntroInner = ({show,showText}) => {

    return (
        <div className = "intro_inner">
            <Title title = {"Let's fly with AirBook!"}/>
            <Button button = {{title:"Sign In", class:"btn",showText:showText, click:show}}/>
            <br/>
            <Button button = {{title:"Sign Up", class:"btn btn2", showText:showText, click:show}}/>
        </div>
    );
};

export default IntroInner;