// Redux store is a function with a private state method, and 5 punlic methods, the 3 most used are getState, suscribre and dispatch.

//Private Property
function createStore() {
  let state; //1. We set a variable that will be not exposed in the returned object of this func
  
  //2. Instead of expose the variable, we declarea a getter function that will retreive the variable... 
  const getState = () =>{ 
    return state
  }
  return {
    getState //3. ...and be expose insitde the returned object making only the function public.
  };
}

export default createStore();