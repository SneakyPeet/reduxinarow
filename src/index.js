import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './stores';
import App from './containers/App';
import AboutPage from './components/about/AboutPageComponent';
import IssuesPage from './containers/issues/IssuesPage';
import SuppliersPage from './containers/suppliers/SuppliersPage';
import SupplierPage from './containers/suppliers/SupplierPage';
import { routes } from './constants';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to={routes.index} />
        <Route path={routes.index} component={AboutPage}/>
        <Route path={routes.issues} component={IssuesPage}/>
        <Route path={routes.suppliers} component={SuppliersPage}/>
        <Route path={routes.suppliers + '/:id'} component={SupplierPage} />
        <Route path={routes.suppliers_update + ':id'} component={SupplierPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
