import { connect } from 'react-redux'
import { fetchSupplier, editSupplier } from '../actions'
import SupplierPageLayout from './components/SupplierPageLayout'


const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.params.id);
  if (state.suppliers.supplier) {
    return {
      supplier: state.suppliers.supplier
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
      dispatch(editSupplier(id));
    },
    update: () => {

    },
    cancel: () => {

    }
  }
}

const SupplierPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SupplierPageLayout)

export default SupplierPage
