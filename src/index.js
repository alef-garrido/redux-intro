import store from './Redux-core-concepts/store';
import * as actions from './ReduxFromScratch/actions';

store.subscribe(() => {
  console.log('Updated!')
});

// store.dispatch(actions.bugAdded('bug 1'));
// store.dispatch(actions.bugAdded('bug 2'));
// store.dispatch(actions.bugAdded('bug 3'));
// store.dispatch(actions.bugResolved(1));

console.log(store.getState());