import { connect } from 'react-redux'
import { fetchSuppliers } from '../../actions/suppliers'
import SuppliersPageComponent from '../../components/suppliers/SuppliersPageComponent'

const mapStateToProps = (state) => {
  return {
    isFetching: state.suppliers.isFetching,
    issues: state.suppliers.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSuppliers: () => {
      dispatch(fetchSuppliers());
    }
  }
}

const SupplierPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SuppliersPageComponent)

export default SupplierPage
