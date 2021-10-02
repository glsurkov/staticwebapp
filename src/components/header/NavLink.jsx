import React from 'react';

const NavLink = (props) => {
    return (
            <a className="nav_link" href="#info">{props.navlink}</a>
    );
};

export default NavLink;