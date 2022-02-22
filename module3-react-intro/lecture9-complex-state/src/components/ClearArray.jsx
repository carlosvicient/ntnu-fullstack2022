import React, { Component } from 'react';

const INITIAL_LIST = ['apple', 'pineapple', 'pen'];

class ClearArray extends Component {
    constructor(props) {
        super(props);
        this.state = { list: INITIAL_LIST };
        this.clearArray = this.clearArray.bind(this);
    }

    clearArray(){
        this.setState({list: []});
    }
    
    render() {
        return (
            <>
                <ul>
                    {this.state.list.map(item => <li key={item}>{item}</li>)}
                </ul>
                <button onClick={this.clearArray}>Clear array</button>

            </>
        );
    }
}

export default ClearArray;