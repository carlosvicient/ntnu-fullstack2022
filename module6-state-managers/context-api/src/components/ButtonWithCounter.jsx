import React, { Component } from 'react';
import { TechnologyContext } from '../providers/TechnologyProvider';

class ButtonWithCounter extends Component {

    //use the provider using the Class.contexType
    static contextType = TechnologyContext;

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
        }, ()=>{
            this.context.selectNewTechnology(this.props.text);
        });
    }
}

export default ButtonWithCounter;