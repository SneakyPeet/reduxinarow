import { connect } from 'react-redux'
import { fetchSuppliers } from '../../actions/suppliers'
import { classes } from '../../constants'
import SupplierPageComponent from '../../components/suppliers/SupplierPageComponent'


const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const SupplierPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SupplierPageComponent)

export default SupplierPage
