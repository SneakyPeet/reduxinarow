'use strict';

import React from 'react';
import IssueList from '../../containers/issues/IssueList';

require('styles/issues/IssuePage.less');

class IssuePageComponent extends React.Component {
  render() {
    return (
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="container-large">
            <IssueList />
          </div>
        </div>
      </main>
    );
  }
}

IssuePageComponent.displayName = 'IssuePageComponent';

// Uncomment properties you need
// IssuePageComponent.propTypes = {};
// IssuePageComponent.defaultProps = {};

export default IssuePageComponent;
