import configureStore from './store/ConfigureStore';
import { loadBugs } from './store/bug-dux';

const store = configureStore();

store.dispatch(loadBugs());

