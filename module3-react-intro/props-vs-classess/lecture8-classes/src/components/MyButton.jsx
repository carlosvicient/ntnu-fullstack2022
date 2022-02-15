import React, { Component } from 'react';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nClicks: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(`'this' value is: ${this}`);
        this.setState((previousState)=>{
            return {
                nClicks: previousState.nClicks+1
            }
        }, ()=> console.log(`The number of clicks is: ${this.state.nClicks}`));
    }

    render() {
        return (
            <button onClick={this.handleClick}>Click {this.state.nClicks} times</button>
        );
    }
}

export default MyButton;