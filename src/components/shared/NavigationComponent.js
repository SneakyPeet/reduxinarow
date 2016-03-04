'use strict';

import React from 'react';

require('styles/shared/Navigation.less');

class NavigationComponent extends React.Component {
  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">React Showcase</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <a className="mdl-navigation__link" href="issues.html">Issues</a>
            <a className="mdl-navigation__link" href="suppliers.html">Suppliers</a>
            <a className="mdl-navigation__link" href="index.html">Voucher</a>
            <a className="mdl-navigation__link active" href="index.html">About</a>
          </nav>
        </div>
      </header>
    );
  }
}

NavigationComponent.displayName = 'SharedNavigationComponent';

// Uncomment properties you need
// NavigationComponent.propTypes = {};
// NavigationComponent.defaultProps = {};

export default NavigationComponent;
