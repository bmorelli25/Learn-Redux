var redux = require('redux');

console.log('Starting Redux Example');

// Name reducer and action generators
// --------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  };
};

// Hobbies reducer and action generators
// --------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id)
    default:
      return state;
  };
};

// Movies reducer and action generators
// --------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          movie: action.movie
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id)
    default:
      return state;
  };
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)); // reducer must be a pure function

// Subscribe to changes
var unsubscribe = store.subscribe( () => {
  var state = store.getState();

  console.log('name is: ', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('new state: ', store.getState());
});
//unsubscribe();

var currentState = store.getState();
console.log('currentState: ', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Brandon'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Inside Man',
  genre: 'Action'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Second Name'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Titanic',
  genre: 'Comedy'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
