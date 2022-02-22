import React, { Component } from 'react';

const INITIAL_LIST = ['apple', 'pineapple', 'pen'];

class ResetArray extends Component {

    constructor(props) {
        super(props);
        this.state = { list: INITIAL_LIST };
        this.clearArray = this.clearArray.bind(this);
        this.pushElem = this.pushElem.bind(this);
        this.resetArray = this.resetArray.bind(this);
    }

    clearArray(){
        this.setState({list: []});
    }

    pushElem() {
        const randomString = Math.random().toString(36).substring(2,7);
        this.setState((state)=>{
            return {
                list: [...state.list, randomString]
            }
        })
    }

    resetArray(){
        this.setState({list: INITIAL_LIST});
    }
    
    render() {
        return (
            <>
                <ul>
                    {this.state.list.map(item => <li key={item}>{item}</li>)}
                </ul>
                <button onClick={this.clearArray}>Clear array</button>
                <button onClick={this.pushElem}>Add random string</button>
                <button onClick={this.resetArray}>Reset array</button>
            </>

        );
    }
}

export default ResetArray;