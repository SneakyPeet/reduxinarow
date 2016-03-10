import { connect } from 'react-redux'
import { fetchSupplier } from '../../actions/suppliers'
import SupplierPageComponent from '../../components/suppliers/SupplierPageComponent'


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

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (id) => {
      dispatch(fetchSupplier(id));
    }
  }
}

const SupplierPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SupplierPageComponent)

export default SupplierPage
