import { RECEIVE_SUPPLIERS, REQUEST_SUPPLIERS, RECEIVE_SUPPLIER, REQUEST_SUPPLIER, EDIT_SUPPLIER, SUPPLIER_DELETED } from './actions';
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

    case SUPPLIER_DELETED: {
      const index = state.data.findIndex((item) => { return item.id === action.id; });
      return Object.assign({}, state, {
        data: [
            ...state.data.slice(0, index),
            ...state.data.slice(index + 1)
        ]
      })
    }
  }
}
