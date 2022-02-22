import React, { Component } from 'react';

const INITIAL_LIST = ['apple', 'pineapple', 'pen'];

class DefaultArray extends Component {
    constructor(props) {
        super(props);
        this.state = { list: INITIAL_LIST };
    }

    render() {
        return (
            <ul>
                {this.state.list.map(item => <li key={item}>{item}</li>)}
            </ul>
        );
    }
}

export default DefaultArray;