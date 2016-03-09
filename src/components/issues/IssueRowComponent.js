'use strict';

import React, {PropTypes} from 'react';
import LinkComponent from '../navigation/LinkComponent';
import routes from '../../containers/navigation/routes';

require('styles/issues/IssueRow.less');

class IssueRowComponent extends React.Component {
  render() {
    const route = routes.issues + '/' + this.props.id;
    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric"><LinkComponent to={route}>{this.props.title}</LinkComponent></td>
        <td className="mdl-data-table__cell--non-numeric">{this.props.publisher}</td>
      </tr>
    );
  }
}

IssueRowComponent.displayName = 'IssueRowComponent';

// Uncomment properties you need
IssueRowComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired
  //rowToggled: PropTypes.func.isRequired
};
// IssueComponent.defaultProps = {};

export default IssueRowComponent;
