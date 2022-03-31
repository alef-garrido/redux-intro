import { createSlice } from "@reduxjs/toolkit";
import { createSelector, cresteSelector } from 'reselect';
import apiCallBegan from './api'

let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState:  {
    list: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    bugsReceived: (state, action) => {
      state.list = action.payload;
    },
    bugAssignedToUser: (state, action) => {
      const { bugId, userId } = action.payload;
      const index = state.list.findIndex(bug => bug.id === bugId)
      state.list[index].userId = userId;
    },
    bugAdded: (state, action) => {
      state.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugRemoved: (state, action) => {
      state.list.filter((bug) => bug.id !== action.type.id);
    },
    bugResolved: (state, action) => {
      const index = state.list.findIndex((bug) => bug.id === action.payload.id);
      state.list[index].resolved = true;
    },
  },
});


export const { 
  bugAdded, 
  bugRemoved, 
  bugResolved, 
  bugAssignedToUser, 
  bugsReceived 
} = slice.actions;
export default slice.reducer;

// ACtion Creators
const url = "/bugs"

export const loadBugs = () => apiCallBegan({
  url,
  onSuccess: bugsReceive.type
})


// Selectors
// export const getUnresolvedBugs = (state) => state.entities.bugs.filter(bug => !bug.resolved);

//By using memoization we get a selector that will not be computed twice if the state hasnt change, here we use "reselect" library to have such selector function
export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  state => state.entities.projects,
  (bugs, projects) => bugs.filter(bug => !bug.resolved)
)

export const getBugsByUser = userId => createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.userId === userId)
);