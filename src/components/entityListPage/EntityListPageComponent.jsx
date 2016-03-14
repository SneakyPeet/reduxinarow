'use strict';

import React, { PropTypes } from 'react';
import EntityList from './EntityListComponent';
import SearchComponent from './SearchComponent';
import Pager from './PagerComponent';

require('styles/entityListPage/EntityListPage.less');

class EntityListPageComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const canCreate = !!this.props.create;
    return (
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="container-large">
            <SearchComponent handleSearch={this.props.handleSearch}/>
            <div className="clear-fix"></div>
            <EntityList {...this.props}/>
            <Pager {...this.props}/>
            <div className="clear-fix"></div>
            <div className="mdl-grid">
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.props.create}>
                Create
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

EntityListPageComponent.displayName = 'EntityListPageComponent';

EntityListPageComponent.propTypes = {
  fetch : PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  pageTotal: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  entityComponent: PropTypes.func.isRequired,
  headers: PropTypes.array.isRequired,
  selectedEntity: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired
};

export default EntityListPageComponent;
