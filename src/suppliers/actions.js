import { networkError } from '../actions/common';
import { routes } from '../constants';
import form from '../forms';
import { push } from 'react-router-redux'
import config from 'config';
import request from 'axios';

const api = config.apiUrl + 'suppliers';

export const REQUEST_SUPPLIERS = 'REQUEST_SUPPLIERS';
function requestSuppliers() {
  return {
    type: REQUEST_SUPPLIERS
  }
}

export const RECEIVE_SUPPLIERS = 'RECEIVE_SUPPLIERS';
function receiveSuppliers(json) {
  return {
    type: RECEIVE_SUPPLIERS,
    suppliers: json
  }
}

export const REQUEST_SUPPLIER = 'REQUEST_SUPPLIER';
function requestSupplier() {
  return {
    type: REQUEST_SUPPLIER
  }
}

export const RECEIVE_SUPPLIER = 'RECEIVE_SUPPLIER';
function receiveSupplier(json) {
  return {
    type: RECEIVE_SUPPLIER,
    supplier: json
  }
}

export const VIEW_SUPPLIER = 'VIEW_SUPPLIER';
export function viewSupplier(id) {
  return dispatch => {
    dispatch(push(routes.suppliers + '/' + id));
  }
}

export const EDIT_SUPPLIER = 'EDIT_SUPPLIER';
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
      .then(req => {
        dispatch(form.init(req.data))
        dispatch(receiveSupplier(req.data))
      })
      .catch(err => dispatch(networkError(err.toString())));
  };
}

export function saveSupplier(supplier) {
  return dispatch => {
    return request.put(api + '/' + supplier.id, supplier)
      .then(req => dispatch(push(routes.suppliers + '/' + req.id)))
      .catch(err => console.log(err));
  };
}

export function createSupplier(supplier) {
  return dispatch => {
    return request.post(api, supplier)
      .then(req => dispatch(push(routes.suppliers + '/' + req.id)))
      .catch(err => console.log(err));
  };
}

export function deleteSupplier(id) {
  return dispatch => {
    return request.delete(api + '/' + id)
      .then(req => dispatch(supplierDeleted(id)))
      .catch(err => console.log(err));
  };
}

export const SUPPLIER_DELETED = 'SUPPLIER_DELETED';
function supplierDeleted(id) {
  return {
    type: SUPPLIER_DELETED,
    id
  }
}
