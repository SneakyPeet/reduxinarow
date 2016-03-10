'use strict';

import React, { PropTypes } from 'react';
import LinkComponent from '../navigation/LinkComponent';
import {routes} from '../../constants';

require('styles/suppliers/SupplierPage.less');

class SupplierPageComponent extends React.Component {
  render() {
    const { name, city, referenceNumber, id } = this.props.supplier;

    return (
      <main className="supplier-page">
        <h1>{name}</h1>
        <div>
          <strong>City: </strong>{city}
        </div>
        <div>
          <strong>Reference Number: </strong>{referenceNumber}
        </div>
        <LinkComponent to={routes.suppliers_update + id}>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Update</button>
        </LinkComponent>
      </main>
    );
  }
}

SupplierPageComponent.displayName = 'SuppliersSupplierPageComponent';

// Uncomment properties you need
SupplierPageComponent.propTypes = {
  supplier: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    referenceNumber: PropTypes.string.isRequired
  })
};
// SupplierPageComponent.defaultProps = {};

export default SupplierPageComponent;