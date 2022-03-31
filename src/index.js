import configureStore from './store/ConfigureStore';
 
const store = configureStore();

store.dispatch({
  type: 'error',
  payload: { message: 'An error ocurred'}
});


