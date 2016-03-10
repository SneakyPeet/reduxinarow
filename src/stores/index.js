const redux = require('redux');
const reducers = require('../reducers');
const thunkMiddleware  = require('redux-thunk');

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

module.exports.configureStore = function(initialState) {
  const store = redux.createStore(
    reducers,
    initialState,
    redux.applyMiddleware(
        thunkMiddleware,
        logger
      )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store;
}
