import { createSlice } from "@reduxjs/toolkit";
import { createSelector, cresteSelector } from 'reselect';

let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugRemoved: (state, action) => {
      state.filter((bug) => bug.id !== action.type.id);
    },
    bugResolved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state[index].resolved = true;
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;
export default slice.reducer;

// Selectors
// export const getUnresolvedBugs = (state) => state.entities.bugs.filter(bug => !bug.resolved);

//By using memoization we get a selector that will not be computed twice if the state hasnt change, here we use "reselect" library to have such selector function
export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  state => state.entities.projects,
  (bugs, projects) => bugs.filter(bug => !bug.resolved)
)