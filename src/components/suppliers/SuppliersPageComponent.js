'use strict';
import React, { PropTypes } from 'react';
import SupplierList from './SupplierListComponent';
import LoadingBar from '../LoadingBarComponent';

require('styles/suppliers/SuppliersPage.less');``

class SuppliersPageComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSuppliers();
  }

  render() {
    const { isFetching } = this.props;
    return (
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="container-large">
            {isFetching && <LoadingBar/>}
            {!isFetching && <SupplierList {...this.props}/> }
          </div>
        </div>
      </main>
    );
  }
}

SuppliersPageComponent.displayName = 'SuppliersSuppliersPageComponent';

// Uncomment properties you need
SuppliersPageComponent.propTypes = {
  fetchSuppliers : PropTypes.func.isRequired,
  suppliers: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default SuppliersPageComponent;
