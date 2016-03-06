import { getApi } from './../sources'

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
    getApi((client) => {
      return client.Issues.Issues_Get()
        .then(req => dispatch(receiveIssues(JSON.parse(req.data))));
    });
  };
}
