// state is an arr []
//Reducer have to be pure funtion, its only dependencies are its argumemnts

// Reducer made with if and else statements
// let lastid = 0;
// const reducer = (state = [], action) {
//   if (action.type === 'bugAdded') 
//   return [
//     ...state,
//     {
//       id: ++lastid,
//       description: action.payload.description,
//       resolvec: false
//     }
//   ];
//   else if (action.type === 'bugedRemoved')
//     return state.filter(bug => bug.id !== action.payload.if );
  
//   return state;
// }

// Reducer made with switch statement - most common
import * as actions from './actionTypes';

let lastId = 0;
const reducer = (state = [], action) => {
  switch(action.type) {
    case actions.BUG_ADDED:
      return [
            ...state,
            {
              id: ++lastId,
              description: action.payload.description,
              resolved: false,
            },
          ];
    case actions.BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id );
    default: 
      return state
  };
};

export default reducer;