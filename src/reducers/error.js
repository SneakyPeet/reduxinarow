import { NETWORK_ERROR } from './../actions/common';

function makeError(msg) {
  return {
    hasError: true,
    message: msg
  }
}

function noError() {
  return {
    hasError: false,
    message: ''
  }
}

module.exports = function(state = noError(), action) {
  if (action.type === NETWORK_ERROR) {
    return Object.assign({}, state, makeError(action.message))
  }

  if (state.hasError) {
    return Object.assign({}, state, noError())
  }

  return state;
}
