import store from "./store";
import { bugAdded, bugRemoved } from './actions'

store.subscribe(() => {
  console.log('Store was Updated', store.getState());
});

store.dispatch(bugAdded('Bug 1'));
store.dispatch(bugRemoved(1));

console.log(store.getState());