import configureStore from './store/ConfigureStore';
import { 
  bugAdded, 
  bugResolved, 
  bugRemoved, 
  getUnresolvedBugs, 
  bugAssignedToUser,
  getBugsByUser
} from './store/bug-dux';
import { projectAdded } from './store/projects-dux'; 
import { userAdded } from './store/users-dux';
 
const store = configureStore();

store.subscribe(() => {
  console.log('Updated!')
});

store.dispatch(userAdded({ name: 'user 1' }));
// store.dispatch(userAdded({ name: 'user 2' }));

// store.dispatch(projectAdded({ name: "project 1" }));
// store.dispatch(bugAdded({ description: 'bug 1' }));
// store.dispatch(bugAdded({ description: 'bug 2' }));
// store.dispatch(bugAdded({ description: 'bug 3' }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugResolved({ id: 1 }));

const unresolvedBugs = getUnresolvedBugs(store.getState())
const bugs = getBugsByUser(1)(store.getState());

