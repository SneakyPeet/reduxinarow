'use strict';

import React, {PropTypes} from 'react';

require('styles/issues/IssueRow.less');

class IssueRowComponent extends React.Component {
  render() {
    const { id, title, publisher } = this.props;
    const onselect = e => {
      e.preventDefault()
      this.props.select(id);
    };
    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric"><a onClick={onselect}>{title}</a></td>
        <td className="mdl-data-table__cell--non-numeric">{publisher}</td>
      </tr>
    );
  }
}

IssueRowComponent.displayName = 'IssueRowComponent';

// Uncomment properties you need
IssueRowComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  select: PropTypes.func.isRequired
};


export default IssueRowComponent;
