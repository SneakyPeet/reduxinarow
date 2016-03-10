'use strict';

import React, {PropTypes} from 'react';
import { routes } from '../../constants';

require('styles/suppliers/SupplierRow.less');

class SupplierRowComponent extends React.Component {
  render() {
    const { name, city, referenceNumber, id} = this.props;
    const route = routes.suppliers + '/' + id;
    const onselect = e => {
      e.preventDefault()
      this.props.select(id);
    };

    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric"><a onClick={onselect}>{name}</a></td>
        <td className="mdl-data-table__cell--non-numeric">{city}</td>
        <td className="mdl-data-table__cell--non-numeric">{referenceNumber}</td>
      </tr>
    );
  }
}

SupplierRowComponent.displayName = 'SupplierRowComponent';

// Uncomment properties you need
SupplierRowComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  referenceNumber: PropTypes.string.isRequired,
  select: PropTypes.func.isRequired
};


export default SupplierRowComponent;
