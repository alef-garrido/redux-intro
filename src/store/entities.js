import { combineReducers } from "redux";
import bugsReducer from './bug-dux';
import projectsReducer from './projects-dux';

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer
})