import React from 'react';
import NavLink from "./NavLink";

const Nav = () => {
    return (
        <nav className = "nav">
            <NavLink navlink = {"Information"}/>
            <NavLink navlink = {"Service"}/>
            <NavLink navlink = {"Blog"}/>
            <NavLink navlink = {"Contact"}/>
        </nav>
    );
};

export default Nav;