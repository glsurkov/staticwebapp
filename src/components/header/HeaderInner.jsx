import React from 'react';
import HeaderLogo from "./HeaderLogo";
import Nav from "./Nav";
import ImageSrc from "../../img/logo.png"

const HeaderInner = () => {
    return (
        <div className = "header_inner">
            <HeaderLogo logo = {{text:"gotoexam",img:ImageSrc}}/>
            <Nav/>
        </div>
    );
};

export default HeaderInner;