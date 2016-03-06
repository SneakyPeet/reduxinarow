'use strict';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

require('styles/navigation/Link.less');

class LinkComponent extends React.Component {
  render() {
    return (
      <Link to={this.props.to}>{this.props.children}</Link>
    );
  }
}

LinkComponent.displayName = 'NavigationLinkComponent';

// Uncomment properties you need
LinkComponent.propTypes = {
  to: PropTypes.string.isRequired
};
// LinkComponent.defaultProps = {};

export default LinkComponent;
