'use strict';

import React, {PropTypes} from 'react';
import LinkComponent from '../navigation/LinkComponent';
import { routes } from '../../constants';

require('styles/suppliers/SupplierRow.less');

class SupplierRowComponent extends React.Component {
  render() {
    const route = routes.suppliers + '/' + this.props.id;
    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric"><LinkComponent to={route}>{this.props.name}</LinkComponent></td>
        <td className="mdl-data-table__cell--non-numeric">{this.props.city}</td>
        <td className="mdl-data-table__cell--non-numeric">{this.props.referenceNumber}</td>
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
  referenceNumber: PropTypes.string.isRequired
};


export default SupplierRowComponent;
