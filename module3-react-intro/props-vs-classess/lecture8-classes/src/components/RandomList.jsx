import React, { Component } from 'react';
import './RandomList.css'

class RandomList extends Component {

    constructor(props) {
        super(props);
        
        this.listA = [...this.props.list];
        this.state = {
            randomList: []
        }

        this.handlePull = this.handlePull.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    render() {
        return (
            <div className="randomList">
                <div>
                    <h2>Original list of elements</h2>
                    <ul className="originalList">
                        {this.props.list.map(elem => (
                            <li key={elem}>{elem}</li>
                        ))}
                    </ul>
                    <button onClick={this.handlePull}>Pull Element</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>

                <div>
                    <h2>Random elements removed from list</h2>
                    <ol className="pulledList">
                        {this.state.randomList.map(elem => (
                                <li key={elem}>{elem}</li>
                            )
                        )}
                    </ol>
                </div>
            </div>
        );
    }

    handlePull() {
        if (!this.listA.length)
            return null;
        const randomIndex = Math.floor(Math.random() * this.listA.length);
        const randomElem = this.listA.splice(randomIndex, 1)[0];
        //Remember, the state is changeable but immutable! We cannot "push" elements to the list
        //we have to create a new list with the new element.
        this.setState((state)=>{
            const randomList = [...state.randomList, randomElem];
            return {
                randomList
            }
        });
    }

    handleReset() {
        this.setState({randomList: []}, ()=>{
            this.listA = [...this.props.list];
        });
    }

    static defaultProps = {
        list: ['apple', 'pinnaple', 'pen']
    };
}

export default RandomList;