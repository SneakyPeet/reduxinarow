'use strict';

import React from 'react';

require('./styles/SupplierPage.less');

class SupplierPageLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.supplier.id) {
      this.props.fetch();
    }
  }

  render() {
    return (
      <main className="supplier-page">
        {React.cloneElement(this.props.children, this.props)}
      </main>
    );
  }
}

SupplierPageLayout.displayName = 'SupplierPageLayout';

export default SupplierPageLayout;
