import React, { useState, useEffect } from 'react';


var interval;

const Timer = () => {
    const [num, setNum] = useState(10);
    const [isStart, setIsStart] = useState(false);

    const setmyInterval = () => {
        interval = setInterval(() => {
            setNum(num => num - 1)
        }, 1000);
    }

    const stopmyInterval = () => {
        clearInterval(interval);
        setIsStart(false);
    }

    useEffect(() => {
        if (num == 0) {
            stopmyInterval();
        }
    }, [num])

    const start = () => {
        if (!isStart) {
            setIsStart(true)
            if (num == 0) {
                setNum(10)
            }
            setmyInterval()

        }
    }
    const stop = () => {
        clearInterval(interval);
        setIsStart(false);
    }

    const reset = () => {
        setNum(10);
    }
    return (
        <>
            <h2>
                {num}
            </h2>
            <button className='timer_btn start' onClick={start}>start</button>
            <button className='timer_btn stop' onClick={stop}>stop</button>
            <button className='timer_btn reset' onClick={reset}>reset</button>
        </>
    )
}

// class Timer extends React.Component {







//     




// }

export default Timer;