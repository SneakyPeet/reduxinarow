import { connect } from 'react-redux';
import { fetchSuppliers, viewSupplier, filterSuppliers } from '../actions';
import { routes } from '../../constants';
import { classes } from '../../constants';
import EntityListPageComponent from '../../components/entityListPage/EntityListPageComponent';
import SupplierRowComponent from './components/SupplierRow';
import { push } from 'react-router-redux';

const searchQuery = 'search';

function contains(item, term) {
  return item.name.toLowerCase().indexOf(term) > -1;
}

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
  let searchTerm = state.routing.locationBeforeTransitions.query[searchQuery];
  let data;
  if (searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    data = state.suppliers.data.filter(item => contains(item, searchTerm));
  } else {
    data = state.suppliers.data;
  }
  return {
    data,
    entityComponent: SupplierRowComponent,
    headers
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetch: () => {
      dispatch(fetchSuppliers());
    },
    selectedEntity: (id) => {
      dispatch(viewSupplier(id));
    },
    handleSearch: (term) => {
      if (term) {
        dispatch(push(routes.suppliers + '?' + searchQuery + '=' + term));
      } else {
        dispatch(push(routes.suppliers));
      }

    }
  }
}

const SuppliersPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityListPageComponent)

export default SuppliersPage
