
//Option useContext hook
/*const TotalClicks = (props) => {
    return (
        <p>The total number of clicks during the execution of this app is: <strong>{props.clickCounter}</strong></p>
    );
}

export default TotalClicks;*/

import React, { Component } from 'react';
import { TechnologyContext } from '../providers/TechnologyProvider';

class TotalClicks extends Component {

    //use the provider using the Class.contexType
    static contextType = TechnologyContext;

    render() {
        return (
            <p>
                The total number of clicks during the execution of this app is:
                <strong>{this.context.clickCounter}</strong>
            </p>
        );
    }
}

export default TotalClicks;