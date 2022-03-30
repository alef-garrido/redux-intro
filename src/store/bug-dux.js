import { createAction } from "@reduxjs/toolkit";

//Action creators - this function now return action creator functions
const bugAdded = createAction('BUG_ADDED');
const bugRemoved = createAction('BUG_REMOVED');
const bugResolved = createAction('BUG_RESOLVED');

console.log(bugAdded)

// Reducer
let lastId = 0;
export default function reducer(state = [], action) {
  switch(action.type) {
    case BUG_ADDED:
      return [
            ...state,
            {
              id: ++lastId,
              description: action.payload.description,
              resolved: false,
            },
          ];
    case BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id );
    case BUG_RESOLVED:
      return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: !bug.resolved }) // Messy code should be replaced with a modern sytax or library to handle immutability
    default: 
      return state
  };
};
