import React from "react";

import classes from './AudionButtonModule.scss'
import { Link } from "react-router-dom";

const AuthButton = ({ onClick, text, to = '' }) => {
    const Clickhandler = (e) =>{
        e.preventDefault();
        onClick();
    };

    return(
        <Link onClick ={Clickhandler} to className = {classes.btn}>
            {text}
        </Link>
    );
}

export default AuthButton;
