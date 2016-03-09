import { connect } from 'react-redux'
import SupplierPageComponent from '../../components/suppliers/SupplierPageComponent'


const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.params.id);
  return {
    supplier: state.suppliers.data.find((item) => { return item.id === id})
  }
}

const mapDispatchToProps = () => {
  return {}
}

const SupplierPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SupplierPageComponent)

export default SupplierPage
