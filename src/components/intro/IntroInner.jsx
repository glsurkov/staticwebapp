import React from 'react';
import '../../styles/style.css'
import Button from "./Button";
import Title from "./Title";

const IntroInner = ({show}) => {

    return (
        <div className = "intro_inner">
            <Title title = {"Let's study with gotoexam!"}/>
            <Button button = {{title:"Sign In", class:"btn", click:show}}/>
            <br/>
            <Button button = {{title:"Sign Up", class:"btn btn2", click:show}}/>
        </div>
    );
};

export default IntroInner;