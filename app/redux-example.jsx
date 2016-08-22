var redux = require('redux');

console.log('Starting Redux Example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  //state = state || {name: 'Anonymous'}; // default state

  return state;
};
var store = redux.createStore(reducer); // reducer must be a pure function

var currentState = store.getState();
console.log('currentState: ', currentState);
