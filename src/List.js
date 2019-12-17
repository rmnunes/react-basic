import React, { Component } from 'react';
import { setInterval } from 'timers';
import PropTypes from 'prop-types';

function FormattedDate(props) {
    return <h1>This is {props.date2.toLocaleTimeString()}</h1>
}

export class List extends Component {

    state = {
        legal: new Date(),
        date: new Date("1/1/1900"),
        counter: 0
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

    onClick = () => {
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
                <FormattedDate date2={this.state.date} />
                {this.props.passit.tittle}
                <br/>
                {this.state.counter}
            </div>
        )
    }
}

List.propTypes = {
    passit: PropTypes.object.isRequired
}

export default List
