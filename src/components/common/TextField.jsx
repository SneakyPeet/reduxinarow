import React, {PropTypes} from 'react';
import TextField from 'material-ui/lib/text-field';

class TextField extends React.Component {
  render() {
    const {name, placeholder, label} = this.props;
    return (
      <div>
        <label>label}</label>
        <input name={name} placeholder={placeholder}/>
      </div>
    );
  }
}

TextField.displayName: 'Text',

TextField.propTypes: {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string
},
