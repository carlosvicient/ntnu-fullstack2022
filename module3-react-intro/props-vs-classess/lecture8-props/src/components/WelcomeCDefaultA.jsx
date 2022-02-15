import './Welcome.css';
import React, { Component } from 'react';

class WelcomeCDefaultA extends Component {
    render() {
        console.log("WelcomeCDefaultA component");
        console.log(" - this.props:", this.props);
        console.log(" - this.props (typeof):", typeof this.props);
        console.log(" - this.props.name:", this.props.name);
        console.log(" - this.props.name (typeof):", typeof this.props.name);

        return (
            <div className="Welcome">
                <p>Hello, {this.props.name} </p>
                <ul className="meta">
                    <li key="props"><strong>props:</strong> {this.props.toString()}</li>
                    <li key="propsTypeOf"><strong>props (typeof):</strong> {typeof this.props}</li>
                    <li key="name"><strong>this.props.name:</strong> {this.props.name}</li>
                    <li key="nameTypeOf"><strong>this.props.name (typeof):</strong> {typeof this.props.name}</li>
                </ul>
            </div>
        );
    }
}

//Defining defaultProps on the component class (outside the body class) 
//  - before ECMAScript static class
WelcomeCDefaultA.defaultProps = {
    name: 'Jane Doe'
};

export default WelcomeCDefaultA;