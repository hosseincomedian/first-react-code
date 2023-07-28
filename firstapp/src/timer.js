import React from 'react';


var interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            num: 10
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        if (this.state.num == 0) {
            clearInterval(interval);
        }
    }

    startTimer = () => {
        interval = setInterval(() => {
            this.setState({
                num: this.state.num - 1
            })
        }, 1000);
    }

    stopTimer = () => {
        clearInterval(interval)
    }

    render() {

        return (
            <>
                <h2>
                    {this.state.num}
                </h2>
                <button onClick={this.startTimer}>start</button>
                <button onClick={this.stopTimer}>stop</button>
            </>
        )
    }
}

export default Timer;