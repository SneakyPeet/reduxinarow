'use strict';
import React from 'react';
import { Route, IndexRoute } from 'react-router'
import SuppliersPage from './views/SuppliersPage';
import SupplierPage from './views/SupplierPage';
import SupplierDetail from './views/components/SupplierDetail';
import EditSupplier from './views/components/EditSupplier';
import { routes } from '../constants';

class Suppliers extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

function configureRoutes() {
  return (
    <Route path={routes.suppliers} component={Suppliers}>
      <IndexRoute component={SuppliersPage} />
      <Route path=':id' component={SupplierPage} >
        <IndexRoute component={SupplierDetail} />
        <Route path='update' component={EditSupplier} />
      </Route>
    </Route>
  );
}

export default configureRoutes;
