var redux = require('redux');

console.log('Starting Redux Example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  //state = state || {name: 'Anonymous'}; // default state

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer); // reducer must be a pure function

var currentState = store.getState();
console.log('currentState: ', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Brandon'
});

console.log('Name should be Brandon: ', store.getState());
