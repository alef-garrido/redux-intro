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

let lastid = 0;
const reducer = (state = [], action) => {
  switch(action.type) {
    case "bugAdded":
      return [
            ...state,
            {
              id: ++lastid,
              description: action.payload.description,
              resolvec: false
            },
          ];
    case "bugRemoved":
      return state.filter(bug => bug.id !== action.payload.if );
    default: 
      return state
  };
};