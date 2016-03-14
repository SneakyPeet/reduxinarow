export const NETWORK_ERROR = 'NETWORK_ERROR';

export function networkError(msg) {
  return {
    type: NETWORK_ERROR,
    message: msg
  }
}

export const FORM_UPDATE_VALUE = 'FORM_UPDATE_VALUE';
export const FORM_RESET = 'FORM_RESET';

export function update(name, value) {
  return dispatch => dispatch({
    type: FORM_UPDATE_VALUE,
    name,
    value
  });
}

export function reset() {
  return dispatch => dispatch({
    type: FORM_RESET
  });
}
