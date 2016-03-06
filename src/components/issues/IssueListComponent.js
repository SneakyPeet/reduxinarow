'use strict';

import React, {PropTypes} from 'react';
import IssueComponent from './IssueComponent';

require('styles/issues/IssueList.less');

class IssueListComponent extends React.Component {
  render() {
    const { issues, isFetching } = this.props;
    return (
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Title</th>
            <th className="mdl-data-table__cell--non-numeric">Publisher</th>
          </tr>
        </thead>
        <tbody>
          {isFetching && <tr><td>Fetching</td></tr>}
          {issues.map((issue, index) => <IssueComponent {...issue} key={index + issue.title}/>)}
        </tbody>
      </table>
    );
  }
}

IssueListComponent.displayName = 'IssuesIssueListComponent';

// Uncomment properties you need
IssueListComponent.propTypes = {
  issues: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};
// IssueListComponent.defaultProps = {};

export default IssueListComponent;
