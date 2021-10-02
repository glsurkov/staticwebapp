import React from 'react';
import '../../styles/style.css'
import Button from "./Button";
import Title from "./Title";

const IntroInner = () => {
    return (
        <div className = "intro_inner">
            <Title title = {"Let's study with gotoexam!"}/>
            <Button button = {{id:1, title:"Sign In", class:"btn"}}/>
            <br/>
            <Button button = {{id:1, title:"Sign Up", class:"btn btn2"}}/>
        </div>
    );
};

export default IntroInner;