// Redux store is a function with a private state method, and 5 punlic methods, the 3 most used are getState, suscribre and dispatch.
import reducer from './reducer';

function createStore(reducer) {
  let state; //1. We set a variable that will be not exposed in the returned object of this func
  let listeners = []; 

  //2. Instead of expose the variable, we declarea a getter function that will retreive the variable... 
  const getState = () =>{ 
    return state
  };

  const dispatch = (action) => {
    state = reducer(state, action);

    for(let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  };

  const subscribe = (listener) => {
    listeners.push(listener)
  };

  return {
    subscribe,
    dispatch,
    getState //3. ...and be expose insitde the returned object making only the function public.
  };
}

export default createStore(reducer);