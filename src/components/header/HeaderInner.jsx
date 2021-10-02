import React from 'react';
import HeaderLogo from "./HeaderLogo";
import Nav from "./Nav";

const HeaderInner = () => {
    return (
        <div className = "header_inner">
            <HeaderLogo logo = "gotoexam"/>
            <Nav/>
        </div>
    );
};

export default HeaderInner;