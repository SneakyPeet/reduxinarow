import { getApi } from './../sources'

export const REQUEST_SUPPLIERS = 'REQUEST_SUPPLIERS'
export const RECEIVE_SUPPLIERS = 'RECEIVE_SUPPLIERS'

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

export function fetchSuppliers() {
  return dispatch => {
    dispatch(requestSuppliers());
    getApi((client) => {
      return client.Suppliers.Suppliers_Get()
        .then(req => dispatch(receiveSuppliers(JSON.parse(req.data))));
    });
  };
}
