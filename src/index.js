import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './stores';
import App from './containers/App';
import AboutPage from './components/about/AboutPageComponent';
import IssuePage from './containers/issues/IssuePage';
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
        <Route path={routes.issues} component={IssuePage}/>
        <Route path={routes.suppliers} component={SupplierPage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
