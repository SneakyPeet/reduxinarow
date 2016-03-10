import { networkError } from './common'
import config from 'config';
import request from 'axios';

const api = config.apiUrl + 'issues';

export const REQUEST_ISSUES = 'REQUEST_ISSUES'
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES'

function requestIssues() {
  return {
    type: REQUEST_ISSUES
  }
}

function receiveIssues(json) {
  return {
    type: RECEIVE_ISSUES,
    issues: json
  }
}

export function fetchIssues() {
  return dispatch => {
    dispatch(requestIssues());
    return request.get(api)
      .then(req => dispatch(receiveIssues(req.data)))
      .catch(err => dispatch(networkError(err)));
  };
}
