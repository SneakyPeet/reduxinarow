'use strict';

import React from 'react';

require('styles//LoadingBar.less');

class LoadingBarComponent extends React.Component {
  render() {
    return (
      <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
    );
  }
}

LoadingBarComponent.displayName = 'LoadingBarComponent';

// Uncomment properties you need
// LoadingBarComponent.propTypes = {};
// LoadingBarComponent.defaultProps = {};

export default LoadingBarComponent;
