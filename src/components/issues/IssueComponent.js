'use strict';

import React from 'react';

require('styles/issues/Issue.less');

class IssueComponent extends React.Component {
  render() {
    return (
      <div className="issue-component">
        Please edit src/components/issues//IssueComponent.js to update this component!
      </div>
    );
  }
}

IssueComponent.displayName = 'IssuesIssueComponent';

// Uncomment properties you need
// IssueComponent.propTypes = {};
// IssueComponent.defaultProps = {};

export default IssueComponent;
