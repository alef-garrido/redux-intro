import store from './redux-CustomeStore';
import * as action from './actions';

store.subscribe(()=>{
  console.log('Updated');
});

store.dispatch(action.bugAdded('Bug 1'));

console.log(store.getState());