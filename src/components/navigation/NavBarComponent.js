'use strict';

import React, {PropTypes} from 'react';
import NavLink from './NavLinkComponent';

require('styles/navigation/NavBar.less');

class NavBarComponent extends React.Component {
  render() {
    return (
      <header className="mdl-layout__header" key="Navbar">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">React Showcase</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            {this.props.navLinks.map((navlink) => <NavLink {...navlink} key={navlink.text}>{navlink.text}</NavLink>)}

          </nav>
        </div>
      </header>
    );
  }
}

NavBarComponent.displayName = 'NavigationNavBarComponent';

NavBarComponent.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool
  })).isRequired
};
// NavBarComponent.defaultProps = {};

export default NavBarComponent;
