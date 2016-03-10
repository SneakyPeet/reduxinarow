'use strict';

import React, { PropTypes } from 'react';
import EntityList from './EntityListComponent';
import SearchComponent from './SearchComponent';

require('styles/entityListPage/EntityListPage.less');

class EntityListPageComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="container-large">
            <SearchComponent />
            {<EntityList {...this.props}/> }
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
  entityComponent: React.PropTypes.func.isRequired,
  headers: React.PropTypes.array.isRequired,
  selectedEntity: React.PropTypes.func.isRequired
};

export default EntityListPageComponent;
