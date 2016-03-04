'use strict';

import React, {PropTypes} from 'react';

require('styles/issues/Issue.less');

class IssueComponent extends React.Component {
  render() {
    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric">{this.props.title}</td>
        <td className="mdl-data-table__cell--non-numeric">{this.props.publisher}</td>
      </tr>
    );
  }
}

IssueComponent.displayName = 'IssuesIssueComponent';

// Uncomment properties you need
IssueComponent.propTypes = {
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired
  //rowToggled: PropTypes.func.isRequired
};
// IssueComponent.defaultProps = {};

export default IssueComponent;
