import { createStore } from 'redux'
import rootReducer from './reducers';
//TO use redux dev tools
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//without hack to use Redux dev tools
//const store = createStore(rootReducer);
export default store;