import { connect } from 'react-redux'
import { fetchSuppliers } from '../../actions/suppliers'
import { classes } from '../../constants'
import EntityListPageComponent from '../../components/entityListPage/EntityListPageComponent'
import SupplierRowComponent from '../../components/suppliers/SupplierRowComponent'

const headers = [{
    text: 'Name',
    class: classes.nonNumericCell
  }, {
    text: 'City',
    class: classes.nonNumericCell
  }, {
    text: 'Reference Number',
    class: classes.nonNumericCell
  }
]

const mapStateToProps = (state) => {
  return {
    isFetching: state.suppliers.isFetching,
    data: state.suppliers.data,
    entityComponent: SupplierRowComponent,
    headers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      dispatch(fetchSuppliers());
    }
  }
}

const SuppliersPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityListPageComponent)

export default SuppliersPage
