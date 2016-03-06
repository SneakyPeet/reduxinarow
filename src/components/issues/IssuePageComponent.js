'use strict';

import React, { PropTypes } from 'react';
import IssueList from './IssueListComponent';
import LoadingBar from '../LoadingBarComponent';

require('styles/issues/IssuePage.less');

class IssuePageComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchIssues();
  }

  render() {
    const { isFetching } = this.props;
    return (
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="container-large">
            {isFetching && <LoadingBar/>}
            {!isFetching && <IssueList {...this.props}/> }
          </div>
        </div>
      </main>
    );
  }
}

IssuePageComponent.displayName = 'IssuePageComponent';

// Uncomment properties you need
IssuePageComponent.propTypes = {
  fetchIssues : PropTypes.func.isRequired,
  issues: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};
// IssuePageComponent.defaultProps = {};

export default IssuePageComponent;
