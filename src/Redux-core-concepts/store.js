import { createStore } from "redux";
import reducer from './reducer'

const store = createStore(reducer); // createStore is a higher order funtion, here we pass a function reference -not a function call-

export default store;  