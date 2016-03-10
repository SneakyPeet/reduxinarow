'use strict';

import React, { PropTypes } from 'react';
import {routes} from '../../../constants';

require('./styles/SupplierPage.less');

class SupplierPageLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { name, city, referenceNumber, id } = this.props.supplier;
    const { edit, isEditing } = this.props;

    return (
      <main className="supplier-page">
        <h1>{name}</h1>
        <div>
          <strong>City: </strong>{city}
        </div>
        <div>
          <strong>Reference Number: </strong>{referenceNumber}
        </div>
        {!isEditing && <button onClick={edit} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Edit</button>}
      </main>
    );
  }
}

SupplierPageLayout.displayName = 'SupplierPageLayout';

// Uncomment properties you need
SupplierPageLayout.propTypes = {
  supplier: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    city: PropTypes.string,
    referenceNumber: PropTypes.string
  }),
  edit: PropTypes.func.isRequired,
  isEditing:  PropTypes.bool.isRequired,
};
// SupplierPageComponent.defaultProps = {};

export default SupplierPageLayout;
