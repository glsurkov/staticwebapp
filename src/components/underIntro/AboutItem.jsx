import React from 'react';

const AboutItem = (props) => {
    return (
        <div className = "about_item">
            <div className="about_image">
                <img src={props.item.img} />
            </div>
            <div className="about_text">
                {props.item.text}
            </div>
            <div className="drop_info">
                {props.item.info}
            </div>
        </div>
    );
};

export default AboutItem;