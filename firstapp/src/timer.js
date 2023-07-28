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

    start = () => {
        interval = setInterval(() => {
            this.setState({
                num: this.state.num - 1
            })
        }, 1000);
    }

    stop = () => {
        clearInterval(interval)
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
                <button onClick={this.start}>start</button>
                <button onClick={this.stop}>stop</button>
                <button onClick={this.reset}>reset</button>
            </>
        )
    }
}

export default Timer;