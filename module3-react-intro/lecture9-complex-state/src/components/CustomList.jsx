import React, { Component } from 'react';

const INITIAL_LIST = ['apple', 'pineapple', 'pen'];
const DEFAULT_CONTROLS = ['clear', 'push', 'reset'];

class CustomList extends Component {

    constructor(props) {
        super(props);
        this.state = { list: this.props.list };

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
        this.setState({list: this.props.list});
    }
    
    render() {
        return (
            <>
                <ul>
                    {this.state.list.map(item => <li key={item}>{item}</li>)}
                </ul> 
                { this._isControlSet('clear') && <button onClick={this.clearArray}>Clear array</button> }
                { this._isControlSet('push') && <button onClick={this.pushElem}>Add random string</button> }
                { this._isControlSet('reset') && <button onClick={this.resetArray}>Reset array</button> }
            </>
        );
    }

    _isControlSet(controlName){
        return this.props.controls.find(elem=>elem===controlName);
    }  

    static defaultProps = {
        list: INITIAL_LIST, 
        controls: DEFAULT_CONTROLS
    };
}

export default CustomList;