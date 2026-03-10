import React from 'react';
import './StarBorder.css';

const StarBorder = ({
    children,
    className = "",
    color = "black",
    backgroundColor = "white",
    speed = "5s",
    ...props
}) => {
    return (
        <div
            className={`star-border-container ${className}`}
            style={{
                '--star-color': color,
                '--star-speed': speed,
                '--bg-color': backgroundColor
            }}
            {...props}
        >
            <div className="star-border-bg single-star"></div>
            <div className="star-border-content-wrapper">
                {children}
            </div>
        </div>
    );
};

export default StarBorder;
