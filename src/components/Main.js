require('normalize.css');
require('styles/app.css');

import React from 'react';
import NavigationComponent from './shared/NavigationComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <NavigationComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
