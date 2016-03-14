export const FORM_INIT = 'FORM_INIT';
function init(initialValue) {
  return dispatch => dispatch({
    type: FORM_INIT,
    initialValue
  });
}

export const FORM_UPDATE_VALUE = 'FORM_UPDATE_VALUE';
function update(name, value) {
  return dispatch => dispatch({
    type: FORM_UPDATE_VALUE,
    name,
    value
  });
}

function reducer(state = {}, action) {
  switch (action.type) {
    case FORM_INIT:
      return Object.assign({}, action.initialValue);
    case FORM_UPDATE_VALUE:
      const newState = Object.assign({}, state);
      newState[action.name] = action.value;
      return newState;
    default:
      return state;
  }
}

export default {
  update,
  init,
  reducer
}
