import { NETWORK_ERROR } from './../actions/common';
import { REQUEST_ISSUES, RECEIVE_ISSUES } from './../actions/issues';
import { REQUEST_SUPPLIER, RECEIVE_SUPPLIER, REQUEST_SUPPLIERS, RECEIVE_SUPPLIERS } from '../suppliers/actions';

module.exports = function(state = false, action) {
  switch(action.type) {

    case REQUEST_ISSUES:
    case REQUEST_SUPPLIER:
    case REQUEST_SUPPLIERS:
      return true;

    case NETWORK_ERROR:
    case RECEIVE_ISSUES:
    case RECEIVE_SUPPLIER:
    case RECEIVE_SUPPLIERS:
      return false;

    default:
      return state;
  }
}
