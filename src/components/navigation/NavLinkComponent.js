'use strict';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

require('styles/navigation/NavLink.less');

class NavLinkComponent extends React.Component {
  render() {
    let styles = 'mdl-navigation__link';
    styles = this.props.isActive ? styles + ' active' : styles;
    return (
      <Link className={styles} to={this.props.to}>{this.props.children}</Link>
    );
  }
}

NavLinkComponent.displayName = 'NavigationNavLinkComponent';

NavLinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};
// NavLinkComponent.defaultProps = {};

export default NavLinkComponent;
