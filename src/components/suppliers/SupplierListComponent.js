'use strict';

import React, {PropTypes} from 'react';
import SupplierComponent from './SupplierComponent';

require('styles/suppliers/SupplierList.less');

class SupplierListComponent extends React.Component {
  render() {
    const { suppliers, isFetching } = this.props;
    return (
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Title</th>
            <th className="mdl-data-table__cell--non-numeric">Publisher</th>
          </tr>
        </thead>
        <tbody>
          {isFetching && <tr><td>Fetching</td></tr>}
          {issues.map((issue, index) => <IssueComponent {...issue} key={index + issue.title}/>)}
        </tbody>
      </table>
    );
  }
}

SupplierListComponent.displayName = 'SuppliersSupplierListComponent';

// Uncomment properties you need
// SupplierListComponent.propTypes = {};
// SupplierListComponent.defaultProps = {};

export default SupplierListComponent;
