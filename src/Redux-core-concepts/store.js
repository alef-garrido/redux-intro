import { createStore } from "redux";
import reducer from './reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // createStore is a higher order funtion, here we pass a function reference -not a function call-

export default store;  