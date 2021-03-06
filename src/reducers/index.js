/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
import suppliers from '../suppliers';
import form from '../forms';
console.log(form);
/* Populated by react-webpack-redux:reducer */
const reducers = {
  routing: require('./routing.js'),
  form: form.reducer,
  error: require('./error.js'),
  issues: require('./issues.js'),
  suppliers: suppliers.reducer,
  isNetworking: require('./network.js')
};
module.exports = combineReducers(reducers);
