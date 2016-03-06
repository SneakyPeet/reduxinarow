import { RECEIVE_ISSUES, REQUEST_ISSUES } from './../actions/issues';
const initialState = {
  isFetching: false,
  data: []
};

module.exports = function(state = initialState, action) {
  switch(action.type) {

    case REQUEST_ISSUES:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_ISSUES:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.issues
      })

    default: {
      return state;
    }
  }
}
