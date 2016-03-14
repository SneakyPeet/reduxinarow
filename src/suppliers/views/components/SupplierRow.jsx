'use strict';

import React, {PropTypes} from 'react';

require('./styles/SupplierRow.less');

class SupplierRow extends React.Component {
  onDelete(e) {
    e.preventDefault();
    this.props.delete(this.props.id);
  }

  render() {
    const { name, city, referenceNumber, id} = this.props;
    const onselect = e => {
      e.preventDefault()
      this.props.select(id);
    };

    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric"><a onClick={onselect}>{name}</a></td>
        <td className="mdl-data-table__cell--non-numeric">{city}</td>
        <td className="mdl-data-table__cell--non-numeric">{referenceNumber}</td>
        <td className="mdl-data-table__cell--non-numeric"><a onClick={this.onDelete.bind(this)}><i className="material-icons">delete</i></a></td>
      </tr>
    );
  }
}

SupplierRow.displayName = 'SupplierRow';

// Uncomment properties you need
SupplierRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  referenceNumber: PropTypes.string.isRequired,
  select: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired
};


export default SupplierRow;
