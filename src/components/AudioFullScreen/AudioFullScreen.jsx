import React, { useContext } from "react";
import classes from "./AudioFullScreen.module.sass";
import {link, useNavigate} from 'react-router-dom';
import AudioInformation from './AudioInformation';
import {AudioContext} from '../../context/Audio-context'
import { useLocation } from "react-router-dom";

const AudioFullScreen = () => {
    const navigate = useNavigate();
    const {state} = useLocation();

    const {currentTime, TotalTime} = useContext(AudioContext);
    const currentTimePercentage = (currentTime/TotalTime) * 95 + 3;

    return (
        <>
          <div className={classes['container']}>
            <Link onClick={() => navigate(-1)} className={classes['container__back-btn']}>
              <svg>
                <use xlinkHref={`${svg}#icon-chevron-left`}></use>
              </svg>
            </Link>
            <div className={classes['container__img']}>
              <img src={state?.imageSource} alt={state?.title} />
            </div>
    
            <AudioInformation />
            <div className={classes['container__progress']}>
          <div
            style={{
              width: `${currentTimePercentage}%`,
            }}
            className={classes['container__progress--bar']}></div>
        </div>
      </div>
    </>
  );
};

export default AudioFullScreen;