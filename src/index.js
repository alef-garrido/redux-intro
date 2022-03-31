import configureStore from './store/ConfigureStore';
 
const store = configureStore();

store.dispatch((dispatch, getState) => {
  dispatch({ type: "bugsReceived", bugs:[1,2,3] })
  console.log(getState())
})
