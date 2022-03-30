import configureStore from './store/ConfigureStore';
import { bugAdded, bugResolved, bugRemoved, getUnresolvedBugs } from './store/bug-dux';
import { projectAdded } from './store/projects-dux';
 
const store = configureStore();

store.subscribe(() => {
  console.log('Updated!')
});

store.dispatch(projectAdded({ name: "project 1" }));
store.dispatch(bugAdded({ description: 'bug 1' }));
store.dispatch(bugAdded({ description: 'bug 2' }));
store.dispatch(bugAdded({ description: 'bug 3' }));
store.dispatch(bugResolved({ id: 1 }));

const unresolvedBugs = getUnresolvedBugs(store.getState())
console.log(unresolvedBugs)