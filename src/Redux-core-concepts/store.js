import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from './reducer'

const store = createStore(
  reducer, 
  devToolsEnhancer({ trace: true })
  ); // createStore is a higher order funtion, here we pass a function reference -not a function call-

export default store;  