'use strict';

import React, { PropTypes } from 'react';

function validate(supplier) {
  supplier
}

class EditSupplier extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(e) {
    e.preventDefault();
    this.props.updateField(e.target.id, e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    const {submit, isEditing, input} = this.props
    submit(input, isEditing);
  }

  render() {
    const {id, name, city, referenceNumber} = this.props.input;
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input id="id" value={id} onChange={this.onUpdate} hidden/>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" placeholder="Name" id="name" value={name} onChange={this.onUpdate}/>
          <label className="mdl-textfield__label">Name</label>
        </div>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" placeholder="City" id="city" value={city} onChange={this.onUpdate}/>
          <label className="mdl-textfield__label">City</label>
        </div>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" placeholder="Reference Number" id="referenceNumber" value={referenceNumber} onChange={this.onUpdate}/>
          <label className="mdl-textfield__label">Reference Number</label>
        </div>
        <button type="submit">{ this.props.isEditing ? "Save" : "Create" }</button>
      </form>
    );
  }
}

EditSupplier.displayName = 'EditSupplier';

EditSupplier.propTypes = {
  input: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    city: PropTypes.string,
    referenceNumber: PropTypes.string
  }),
  updateField: PropTypes.func,
  submit: PropTypes.func,
  isEditing: PropTypes.bool
};

export default EditSupplier;
