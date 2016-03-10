'use strict';

import React, { PropTypes } from 'react';

class SupplierDetail extends React.Component {

  render() {
    return (
      <div>
        EDIT
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
  update: PropTypes.func
};

export default SupplierDetail;
