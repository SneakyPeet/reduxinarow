'use strict';

import React, { PropTypes } from 'react';

class PagerComponent extends React.Component {
  constructor() {
    super();
    this.goToPage.bind(this);
  }

  goToPage(pageNumber) {
    var f = this.props.goToPage;
    return () => f(pageNumber);
  }


  render() {
    const { pageTotal, page } = this.props;
    return (
      <div className="mdl-cell mdl-cell--6-col">
        { pageTotal > 1 &&
          <div className="pull-right">
            { page > 1 &&
              <button className="mdl-button mdl-js-button mdl-button--icon" onClick={this.goToPage(page - 1)}>
                <i className="material-icons">navigate_before</i>
              </button>
            }
            {page}/{pageTotal}
            { page < pageTotal &&
              <button className="mdl-button mdl-js-button mdl-button--icon" onClick={this.goToPage(page + 1)}>
                <i className="material-icons">navigate_next</i>
              </button>
            }
          </div>
        }
      </div>
    );
  }
}

PagerComponent.displayName = 'PagerComponent';

// Uncomment properties you need
PagerComponent.propTypes = {
  goToPage: PropTypes.func.isRequired,
  pageTotal: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};
// SearchComponent.defaultProps = {};

export default PagerComponent;
