var redux = require('redux');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

console.log('Starting Redux Example');

// Subscribe to changes
var unsubscribe = store.subscribe( () => {
  var state = store.getState();

  console.log('new state: ', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a target="_blank" href="' + state.map.url + '">View Your Location</a>'
  }
});
//unsubscribe();

var currentState = store.getState();
console.log('currentState: ', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Brandon'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Second Name'));

store.dispatch(actions.addMovie('Inside Man', 'Action'));
store.dispatch(actions.addMovie('Titanic', 'Comedy'));
store.dispatch(actions.removeMovie(1));
