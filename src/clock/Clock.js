import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        setInterval(this.refresh, 1000);
    }

    componentDidMount() {
        this.timeId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
        );
    }

}

export default Clock;
