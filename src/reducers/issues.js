import { RECEIVE_ISSUES, REQUEST_ISSUES } from './../actions/issues';
const initialState = {
  isFetching: false,
  data: []
};

module.exports = function(state = initialState, action) {
  switch(action.type) {

    case RECEIVE_ISSUES:
      return Object.assign({}, state, {
        data: action.issues
      })

    case REQUEST_ISSUES:
    default: {
      return state;
    }
  }
}
