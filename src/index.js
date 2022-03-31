import configureStore from './store/ConfigureStore';
import * as actions from './store/api';
 
const store = configureStore();

store.dispatch(
  actions.apiCallBegan({
  url: "/bugs",
  onSucces: "bugsReceived",
  })
);
