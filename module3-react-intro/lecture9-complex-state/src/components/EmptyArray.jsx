import React, { Component } from 'react';

class EmptyArray extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [] };
    }
    render() {
        return (
            <ul>
                {this.state.list.map(item => <li key={item}>{item}</li>)}
            </ul>
        );
    }
}

export default EmptyArray;