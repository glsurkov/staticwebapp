import React from 'react';
import '../../styles/style.css'

const Button = (props) => {
    return (
        <a className={props.button.class} href="#">{props.button.title}</a>
    );
};

export default Button;