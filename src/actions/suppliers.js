import { getApi } from './../sources';
import { networkError } from './common';
import { routes } from '../constants';
import { push } from 'react-router-redux'

export const REQUEST_SUPPLIERS = 'REQUEST_SUPPLIERS';
export const RECEIVE_SUPPLIERS = 'RECEIVE_SUPPLIERS';
export const REQUEST_SUPPLIER = 'REQUEST_SUPPLIER';
export const RECEIVE_SUPPLIER = 'RECEIVE_SUPPLIER';
export const VIEW_SUPPLIER = 'VIEW_SUPPLIER';

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

function requestSupplier() {
  return {
    type: REQUEST_SUPPLIER
  }
}

function receiveSupplier(json) {
  return {
    type: RECEIVE_SUPPLIER,
    supplier: json
  }
}

export function viewSupplier(id) {
  return dispatch => {
    dispatch(push(routes.suppliers + '/' + id));
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

export function fetchSupplier(id) {
  return dispatch => {
    dispatch(requestSupplier(id));
    getApi((err, client) => {
      if(err) {
        dispatch(networkError(err));
        return;
      }
      return client.Suppliers.Suppliers_Get_0({issueId: 0, supplierId: id})
        .then(req => dispatch(receiveSupplier(JSON.parse(req.data))))
        .catch(err => dispatch(networkError(err)));
    });
  };
}
