'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

require('styles/common/LoadingBar.less');

class LoadingBarComponent extends React.Component {
  render() {
    const { isLoading } = this.props;
    if(!isLoading) {
      return null;
    }
    return (
      <progress className="loadingbar-component" max="100">
        <span>Loading</span>
      </progress>
    );
  }
}

LoadingBarComponent.displayName = 'LoadingBarComponent';

LoadingBarComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isNetworking
  }
}

const LoadingBar = connect(
  mapStateToProps
)(LoadingBarComponent)

export default LoadingBar
