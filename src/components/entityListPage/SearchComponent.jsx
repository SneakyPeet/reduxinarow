'use strict';

import React, { PropTypes } from 'react';

require('styles/entityListPage/Search.less');

class SearchComponent extends React.Component {
  onSearch(e) {
    this.props.handleSearch(e.target.value);
  }

  render() {
    return (
      <div className="pull-right">
        <div className="mdl-textfield mdl-js-textfield is-upgraded" data-upgraded=",MaterialTextfield">
          <input className="mdl-textfield__input" type="text" id="sample1" onChange={this.onSearch.bind(this)}/>
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
SearchComponent.propTypes = {
  handleSearch: PropTypes.func.isRequired
};
// SearchComponent.defaultProps = {};

export default SearchComponent;
