// Implement an action to mark a bug as resolved
import store from "../store";
import { bugAdded, bugRemoved, bugResolved } from '../actions';


store.subscribe(() => {
  console.log('Store was Updated', store.getState());
});

store.dispatch(bugAdded('Bug 1'));
store.dispatch(bugResolved(1));

console.log(store.getState());