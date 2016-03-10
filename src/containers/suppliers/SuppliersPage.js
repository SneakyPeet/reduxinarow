import { connect } from 'react-redux'
import { fetchSuppliers, viewSupplier } from '../../actions/suppliers'
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
    data: state.suppliers.data,
    entityComponent: SupplierRowComponent,
    headers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      dispatch(fetchSuppliers());
    },
    selectedEntity: (id) => {
      dispatch(viewSupplier(id));
    }
  }
}

const SuppliersPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityListPageComponent)

export default SuppliersPage
