import React, { Component } from 'react';

class ButtonWithCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { clicks: 0 };
    }

    render() {
        const text = `${this.props.text} (${this.state.clicks} times)`;
        return (
            <button onClick={this.handleClick}>{text}</button>
        );
    }

    handleClick = () => {
        this.setState(state => {
            return { clicks: state.clicks + 1 }
        });
    }
}

export default ButtonWithCounter;