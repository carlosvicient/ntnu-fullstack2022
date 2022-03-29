// src/redux/actions.js
export const SELECT_TECHNOLOGY = 'SELECT_TECHNOLOGY';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export function selectTechnology (technology){
    return {
        type: SELECT_TECHNOLOGY,
        payload: technology
    }
}

export function incrementCounter (){
    return {
        type: INCREMENT_COUNTER
    }
}
