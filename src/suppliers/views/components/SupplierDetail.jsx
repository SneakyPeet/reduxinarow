'use strict';

import React, { PropTypes } from 'react';

class SupplierDetail extends React.Component {

  render() {
    const { name, city, referenceNumber} = this.props.supplier;
    const { edit } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <div>
          <strong>City: </strong>{city}
        </div>
        <div>
          <strong>Reference Number: </strong>{referenceNumber}
        </div>
        <button onClick={edit} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Edit</button>
      </div>
    );
  }
}

SupplierDetail.displayName = 'SupplierDetail';

SupplierDetail.propTypes = {
  supplier: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    city: PropTypes.string,
    referenceNumber: PropTypes.string
  }),
  edit: PropTypes.func
};

export default SupplierDetail;
