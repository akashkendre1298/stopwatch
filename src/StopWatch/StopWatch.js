import React, { useState, useEffect } from 'react'


const StopWatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);



    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds + 1);
            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }

        }, 1000)
        return () =>
            clearInterval(timer);
    });

    const restart = () => {
        setSeconds(0);
        setMinutes(0);


    }
    const stop = () => {
        clearInterval(timer);
    }

    return (
        <>
            <div className="timer-main-div">

                <h1>Timer</h1>
                <h2>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h2>

                <button onClick={restart}>Restart</button>
                <button onClick={stop}>stop</button>
            </div>

        </>
    )
}

export default StopWatch