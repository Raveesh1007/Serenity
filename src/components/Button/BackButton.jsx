import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from './BackButtonModule.scss';

const BackButton = () => {
    const Navigate = useNavigate();

    return(
        <link
        onClick={() =>{
            Navigate(-1);
        }}
        className = {classes.arrow}>
            <svg className={classes.arrowSvg}>
                <use xlinkHref={`${svg}#icon-chevron-left`}></use>
            </svg>
        </link>
    );
};

export default BackButton;
