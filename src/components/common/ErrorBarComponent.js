'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

require('styles/common/ErrorBar.less');

class ErrorBarComponent extends React.Component {
  render() {
    const {hasError, message} = this.props;
    if (!hasError) {
      return null;
    }
    return (
      <div className="errorbar-component">
        {message}
      </div>
    );
  }
}

ErrorBarComponent.displayName = 'ErrorErrorBarComponent';

ErrorBarComponent.propTypes = {
  message: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return state.error;
}

const ErrorBar = connect(
  mapStateToProps
)(ErrorBarComponent)

export default ErrorBar
