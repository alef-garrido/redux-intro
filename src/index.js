import configureStore from './store/ConfigureStore';
import * as actions from './store/bug-dux';
import { projectAdded } from './store/projects-dux';
 
const store = configureStore();

store.subscribe(() => {
  console.log('Updated!')
});

store.dispatch(projectAdded({ name: "project 1" }));
store.dispatch(actions.bugAdded({ description: 'bug 1' }));
store.dispatch(actions.bugAdded({ description: 'bug 2' }));
store.dispatch(actions.bugAdded({ description: 'bug 3' }));
store.dispatch(actions.bugResolved({ id: 1 }));

console.log(store.getState());