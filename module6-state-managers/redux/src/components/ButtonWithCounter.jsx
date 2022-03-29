import React, { Component } from 'react';

import { connect } from 'react-redux';
import { selectTechnology, incrementCounter } from '../redux/actions';

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
        }, () => {
            //this.props.{selectTechnology|incrementCounter} is
            //passed to this component by the connect HOC.
            this.props.selectTechnology(this.props.text);
            this.props.incrementCounter(); 
        });
    }
}

//new (Redux)
//don't need mapStateToProps here (only need to dispatch actions)
//if the button is click, we dispatch 2 actions
const mapDispatchToProps = { selectTechnology, incrementCounter };

//export default ButtonWithCounter;
export default connect(null, mapDispatchToProps)(ButtonWithCounter);