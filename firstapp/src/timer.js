import React from 'react';


var interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            num: 10,
            is_started: false
        }
    }

    setInterval = () => {
        interval = setInterval(() => {
            this.setState({
                num: this.state.num - 1
            })
        }, 1000);
    }

    stopInterval = () => {
        clearInterval(interval);
    }

    componentDidUpdate() {
        if (this.state.num == 0) {
            this.stopInterval();
        }
    }

    start = () => {
        if (!this.state.is_started) {
            this.setState({
                is_started: true
            })
            this.setInterval()
        }
    }

    stop = () => {
        clearInterval(interval)
        this.setState({
            is_started: false
        })
    }

    reset = () => {
        this.setState({
            num: 10
        })
    }

    render() {

        return (
            <>
                <h2>
                    {this.state.num}
                </h2>
                <button className='timer_btn start' onClick={this.start}>start</button>
                <button className='timer_btn stop' onClick={this.stop}>stop</button>
                <button className='timer_btn reset' onClick={this.reset}>reset</button>
            </>
        )
    }
}

export default Timer;