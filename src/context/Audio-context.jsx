import React, { Children } from "react";  

export const AudioContext = createContext({
    currentSoundId: null,
    isPlaying: false,
    isPaused: false,
    currentTime: 0,
    TotalTime: 0,
    currentvolume: 0,
    playAudio: () => {},
    pauseAudio: () => {},
});

const AudioContextProvider = ({children}) => {
    const [currentSoundId, setCurrentSoundId] = useState(null);
    const [isPlaying, setisPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [TotalTime, setTotalTime] = useState(0);
    const [currentVolume, setCurrentVolume] = useState(0);
    
    const audioRef = useRef(newAudio());

    const playAudio = (audioSource , soundId) =>{
        if(currentSoundId === soundId && isPlaying){
            audioRef.current.pause();
            setisPlaying(false);
            setIsPaused(true);
        }else{
            audioRef.current.src = audioSource;
            audioRef.current.currentTime = currentSourceId === soundId ? currentTime : 0;
            audioRef.current.play();
            setisPlaying(true);
            set
        }
    }
})