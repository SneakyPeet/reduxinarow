'use strict';

import React, { PropTypes } from 'react';

class EditSupplier extends React.Component {
  render() {
    //const {fields: {name, city, referenceNumber}, update} = this.props;
    return (
      <form onSubmit={this.props.update}>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" placeholder="Name"/>
          <label className="mdl-textfield__label">Name</label>
        </div>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" placeholder="City"/>
          <label className="mdl-textfield__label">City</label>
        </div>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" placeholder="Reference Number"/>
          <label className="mdl-textfield__label">Reference Number</label>
        </div>
        <button type="submit">Update</button>
      </form>
    );
  }
}

EditSupplier.displayName = 'EditSupplier';

EditSupplier.propTypes = {
  supplier: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    city: PropTypes.string,
    referenceNumber: PropTypes.string
  }),
  update: PropTypes.func
};

export default EditSupplier;
