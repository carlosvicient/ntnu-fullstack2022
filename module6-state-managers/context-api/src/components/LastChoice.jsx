// const LastChoice = (props) => {
//     return (
//         <p>Your last choice was: <strong>{props.lastChoice || 'none'}</strong></p>
//     );
// }

// export default LastChoice;

import React, { Component } from 'react';
import { TechnologyContext } from '../providers/TechnologyProvider';

class LastChoice extends Component {

    //use the provider using the Class.contexType
    static contextType = TechnologyContext;

    render() {
        return (
            <p>Your last choice was: <strong>{this.context.selectedTechnology || 'none'}</strong></p>
        );
    }
}

export default LastChoice;