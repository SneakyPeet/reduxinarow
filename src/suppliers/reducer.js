import { RECEIVE_SUPPLIERS, REQUEST_SUPPLIERS, RECEIVE_SUPPLIER, REQUEST_SUPPLIER, EDIT_SUPPLIER } from './actions';
const initialState = {
  data: [],
  supplier: null
};

module.exports = function(state = initialState, action) {
  switch(action.type) {

    case REQUEST_SUPPLIER:
      return Object.assign({}, state, {
        supplier: null
      })

    case RECEIVE_SUPPLIER:
      return Object.assign({}, state, {
        supplier: action.supplier,
        isEditing: false
      })

    case RECEIVE_SUPPLIERS:
      return Object.assign({}, state, {
        data: action.suppliers
      })

    case REQUEST_SUPPLIERS:
    default: {
      return state;
    }
  }
}
