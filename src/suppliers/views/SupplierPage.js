import { connect } from 'react-redux'
import { fetchSupplier, editSupplier } from '../actions'
import SupplierPageComponent from './components/SupplierPageLayout'


const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.params.id);
  if (state.suppliers.supplier) {
    return {
      supplier: state.suppliers.supplier,
      isEditing: state.suppliers.isEditing
    }
  }

  return {
    supplier: { id }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.params.id;
  return {
    fetch: () => {
      dispatch(fetchSupplier(id));
    },
    edit: () => {
      dispatch(editSupplier());
    }
  }
}

const SupplierPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SupplierPageComponent)

export default SupplierPage
