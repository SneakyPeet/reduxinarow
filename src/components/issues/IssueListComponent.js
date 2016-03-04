'use strict';

import React, {PropTypes} from 'react';
import IssueComponent from './IssueComponent';

require('styles/issues/IssueList.less');

class IssueListComponent extends React.Component {
  render() {
    return (
      <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Title</th>
            <th className="mdl-data-table__cell--non-numeric">Publisher</th>
          </tr>
        </thead>
        <tbody>
          {this.props.issues.map((issue) => <IssueComponent {...issue} key={issue.title}/>)}
        </tbody>
      </table>
    );
  }
}

IssueListComponent.displayName = 'IssuesIssueListComponent';

// Uncomment properties you need
IssueListComponent.propTypes = {
  issues: PropTypes.array.isRequired
};
// IssueListComponent.defaultProps = {};

export default IssueListComponent;
