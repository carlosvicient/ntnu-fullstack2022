// src/providers/TechnologyProvider.jsx
import React, { Component } from 'react';

const initialState = {
    selectedTechnology: "",
    clickCounter: 0
};

//1) Define the context
export const TechnologyContext = React.createContext(initialState);

//2) Define the Provider
class TechnologyProvider extends Component {

    state = { ...initialState };

    selectNewTechnology = (newTechnology) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                selectedTechnology: newTechnology,
                clickCounter: prevState.clickCounter+1
            }
        });
    }

    render() {
        return (
            <TechnologyContext.Provider
                value={{
                    selectedTechnology: this.state.selectedTechnology,
                    clickCounter: this.state.clickCounter,
                    selectNewTechnology: this.selectNewTechnology
                }}>
                    {this.props.children}
            </TechnologyContext.Provider>
        );
    }
}

export default TechnologyProvider;