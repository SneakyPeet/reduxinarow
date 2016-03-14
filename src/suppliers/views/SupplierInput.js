import { connect } from 'react-redux'
import form from '../../forms'
import EditSupplier from './components/EditSupplier'
import { saveSupplier, createSupplier } from '../actions'

const mapStateToProps = (state) => {
  return {
    input: state.form,
    isEditing: !!state.form.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateField: (field, value) => {
      dispatch(form.update(field, value));
    },
    submit: (input, isEditing) => {
      if (isEditing) {
        dispatch(saveSupplier(input));
      } else {
        dispatch(createSupplier(input));
      }
    },
    cancel: () => {

    }
  }
}

const SupplierInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSupplier)

export default SupplierInput
