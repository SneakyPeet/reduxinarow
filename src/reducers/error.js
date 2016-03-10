import { NETWORK_ERROR } from './../actions/common';

function noError() {
  return {
    hasError: false,
    message: ''
  }
}

module.exports = function(state = noError(), action) {
  if (action.type === NETWORK_ERROR) {
    return {
      hasError: true,
      msg: action.message
    }
  }

  return noError();
}
