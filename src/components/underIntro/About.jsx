import React from 'react';
import AboutItem from "./AboutItem";
import imageSrc from "../../img/password.jpg"
import imageSrc2 from "../../img/password.jpg"
import imageSrc3 from "../../img/password.jpg"

const About = () => {
    return (
        <div className="about">
            <AboutItem item = {{img:imageSrc, text: "How to use", info: "info"}}/>
            <AboutItem item = {{img:imageSrc2, text: "Support", info: "info"}}/>
            <AboutItem item = {{img:imageSrc3, text: "Wishes", info: "info"}}/>
        </div>
    );
};

export default About;