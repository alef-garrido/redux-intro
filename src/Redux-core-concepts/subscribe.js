import store from "./store";

//every time state of store is changed this fnc gets called
store.subscribe(()=>{
  console.log('Sotre changed', store.getState());
});

const unsubscribe = store.subscribe(()=>{
  console.log('Sotre changed', store.getState());
});


// DISPATCHING ACTIONS
store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug 1 Found'
  }
})

unsubscribe(); //Unsusbcribe if component wont be visible, to prevent memory leeks

store.dispatch({
  type: 'bugRemoved',
  payload: {
    id: 1
  }
})

console.log(store.getState());