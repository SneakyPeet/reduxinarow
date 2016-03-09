import { RECEIVE_SUPPLIERS, REQUEST_SUPPLIERS } from './../actions/suppliers';
const initialState = {
  isFetching: false,
  data: []
};

module.exports = function(state = initialState, action) {
  switch(action.type) {

    case REQUEST_SUPPLIERS:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_SUPPLIERS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.suppliers
      })

    default: {
      return state;
    }
  }
}
