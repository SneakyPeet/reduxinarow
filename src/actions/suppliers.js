import { getApi } from './../sources'
import { networkError } from './common'

export const REQUEST_SUPPLIERS = 'REQUEST_SUPPLIERS';
export const RECEIVE_SUPPLIERS = 'RECEIVE_SUPPLIERS';
export const REQUEST_SUPPLIER = 'REQUEST_SUPPLIER';
export const RECEIVE_SUPPLIER = 'RECEIVE_SUPPLIER';

function requestSuppliers() {
  return {
    type: REQUEST_SUPPLIERS
  }
}

function receiveSuppliers(json) {
  return {
    type: RECEIVE_SUPPLIERS,
    suppliers: json
  }
}

function requestSupplier(id) {
  return {
    type: REQUEST_SUPPLIER,
    id
  }
}

function receiveSupplier(json) {
  return {
    type: RECEIVE_SUPPLIERS,
    supplier: json
  }
}

export function fetchSuppliers() {
  return dispatch => {
    dispatch(requestSuppliers());
    getApi((err, client) => {
      if(err) {
        dispatch(networkError(err));
        return;
      }
      return client.Suppliers.Suppliers_Get()
        .then(req => dispatch(receiveSuppliers(JSON.parse(req.data))))
        .catch(err => dispatch(networkError(err)));
    });
  };
}
