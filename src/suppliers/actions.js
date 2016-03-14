import { networkError } from '../actions/common';
import { routes } from '../constants';
import { push } from 'react-router-redux'
import config from 'config';
import request from 'axios';

const api = config.apiUrl + 'suppliers';

export const REQUEST_SUPPLIERS = 'REQUEST_SUPPLIERS';
export const RECEIVE_SUPPLIERS = 'RECEIVE_SUPPLIERS';
export const REQUEST_SUPPLIER = 'REQUEST_SUPPLIER';
export const RECEIVE_SUPPLIER = 'RECEIVE_SUPPLIER';
export const VIEW_SUPPLIER = 'VIEW_SUPPLIER';
export const EDIT_SUPPLIER = 'EDIT_SUPPLIER';

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

export function editSupplier(id) {
  return dispatch => {
    dispatch(push(routes.suppliers + '/' + id + '/update'));
  }
}

export function fetchSuppliers() {
  return dispatch => {
    dispatch(requestSuppliers());
    return request.get(api)
      .then(req => dispatch(receiveSuppliers(req.data)))
      .catch(err => dispatch(networkError(err.toString())));
  };
}

export function fetchSupplier(id) {
  return dispatch => {
    dispatch(requestSupplier(id));
    return request.get(api, {params: { id }})
      .then(req => dispatch(receiveSupplier(req.data)))
      .catch(err => dispatch(networkError(err.toString())));
  };
}
