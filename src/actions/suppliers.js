import { getApi } from './../sources'
import { networkError } from './common'

export const REQUEST_SUPPLIERS = 'REQUEST_SUPPLIERS';
export const RECEIVE_SUPPLIERS = 'RECEIVE_SUPPLIERS';
export const REQUEST_SUPPLIER = 'REQUEST_SUPPLIER';
export const RECEIVE_SUPPLIER = 'RECEIVE_SUPPLIER';
export const SUPPLIER_NOT_FOUND = 'SUPPLIER_NOT_FOUND';

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

function supplierNotFound() {
  return {
    type: SUPPLIER_NOT_FOUND
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
        .catch(err => dispatch(networkError(err.statusText)));
    });
  };
}

// export function fetchSupplier() {
//   return dispatch => {
//     dispatch(requestSuppliers());
//     getApi((client) => {
//       return client.Suppliers.Suppliers_GetById()
//         .then(req => dispatch(receiveSuppliers(JSON.parse(req.data))));
//     });
//   };
// }
