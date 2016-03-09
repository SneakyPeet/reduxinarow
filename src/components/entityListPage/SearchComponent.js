'use strict';

import React from 'react';

require('styles/entityListPage/Search.less');

class SearchComponent extends React.Component {
  render() {
    return (
      <div className="pull-right">
        <div className="mdl-textfield mdl-js-textfield is-upgraded" data-upgraded=",MaterialTextfield">
          <input className="mdl-textfield__input" type="text" id="sample1"/>
          <label className="mdl-textfield__label" htmlFor="sample1">Search</label>
        </div>
        <label className="mdl-button mdl-js-button mdl-button--icon" data-upgraded=",MaterialButton">
          <i className="material-icons">search</i>
        </label>
      </div>
    );
  }
}

SearchComponent.displayName = 'EntityListPageSearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
