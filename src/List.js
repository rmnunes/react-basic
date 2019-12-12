import React, { Component } from 'react'
import { setInterval } from 'timers';

export class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            legal: new Date(),
            counter: new Number()
        }
        this.onClick = this.onClick.bind(this);
        console.log(this.state)
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            legal: new Date()
        });
    }

    onClick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div>
                <p>HI</p>
                <button onClick={this.onClick}>OK</button>
                <p>{this.state.legal.toLocaleTimeString()}</p>
                <p>ok</p>
            </div>
        )
    }
}

export default List
