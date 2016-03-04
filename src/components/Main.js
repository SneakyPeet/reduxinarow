require('normalize.css');
require('styles/app.css');

import React from 'react';
import Navigation from '../containers/navigation/Navigation';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
