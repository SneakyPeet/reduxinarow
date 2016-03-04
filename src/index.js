import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './stores';
import App from './containers/App';
import AboutPage from './components/about/AboutPageComponent';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={AboutPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
