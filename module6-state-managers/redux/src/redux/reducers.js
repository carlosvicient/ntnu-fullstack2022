import { INCREMENT_COUNTER, SELECT_TECHNOLOGY } from "./actions";

const initialState = {
    selectedTechnology: "",
    clickCounter: 0
};

function rootReducer(prevState = initialState, action) {
    switch (action.type) {
        case SELECT_TECHNOLOGY:
            return { ...prevState, selectedTechnology: action.payload };
        case INCREMENT_COUNTER:
            return { ...prevState, clickCounter: prevState.clickCounter + 1 };
        default: return prevState;
    }
}

export default rootReducer;