'use strict';

import React, {PropTypes} from 'react';

require('styles/entityListPage/EntityList.less');

class EntityListComponent extends React.Component {
  render() {
    const { data, headers } = this.props;
    const Entity = this.props.entityComponent;
    return (
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            {headers.map((head, index) => <th className={head.class} key={'h' + index}>{head.text}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => <Entity {...item} key={index}/>)}
        </tbody>
      </table>
    );
  }
}

EntityListComponent.displayName = 'EntitiesEntityListComponent';

// Uncomment properties you need
EntityListComponent.propTypes = {
  data: PropTypes.array.isRequired,
  entityComponent: React.PropTypes.func.isRequired,
  headers: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired
  }))
};
// IssueListComponent.defaultProps = {};

export default EntityListComponent;
