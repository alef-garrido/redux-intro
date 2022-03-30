import { createAction, createReducer } from "@reduxjs/toolkit";

//Action creators - this function now return action creator functions
export const bugAdded = createAction("BUG_ADDED");
export const bugRemoved = createAction("BUG_REMOVED");
export const bugResolved = createAction("BUG_RESOLVED");

// Reducer
let lastId = 0;

export default createReducer([], {
  [bugAdded.type]: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugRemoved.type]: (state, action) => {
    state.filter((bug) => bug.id !== action.type.id);
  },
  [bugResolved.type]: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].resolved = true;
  },
});
