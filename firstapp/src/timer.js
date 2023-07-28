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
        interval = setInterval(() => {
            this.setState({
                num: this.state.num - 1
            })
        }, 1000);
    }

    componentDidUpdate(){
        if (this.state.num == 0){
            clearInterval(interval);
        }
    }

    render() {

        return (
            <h2>
                {this.state.num}
            </h2>
        )
    }
}

export default Timer;