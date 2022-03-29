import { incrementCounter, selectTechnology } from './actions';
import store from './store';

//This is a test to show you how redux works as an agnostic solution.
//So far, we are only running JS code (not react).
export default function reduxTest() {
    // Log the initial state
    console.log('Initial state: ', store.getState());

    // Every time the state changes, log it
    // Note that subscribe() returns a function for unregistering the listener
    const unsubscribe = store.subscribe(() =>
        console.log('State after dispatch: ', store.getState())
    );

    // Now, dispatch some actions
    store.dispatch(selectTechnology("JS"));
    store.dispatch(incrementCounter());
    store.dispatch(selectTechnology("TS"));
    store.dispatch(incrementCounter());

    // Stop listening to state updates
    unsubscribe();
}