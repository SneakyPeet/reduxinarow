import { connect } from 'react-redux';
import { fetchSuppliers, viewSupplier, filterSuppliers } from '../actions';
import { routes } from '../../constants';
import { classes } from '../../constants';
import EntityListPageComponent from '../../components/entityListPage/EntityListPageComponent';
import SupplierRowComponent from './components/SupplierRow';
import { push } from 'react-router-redux';

const searchQuery = 'search';
const pageQuery = 'page';

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

function contains(item, term) {
  return item.name.toLowerCase().indexOf(term) > -1;
}

function filterData(state) {
  let searchTerm = state.routing.locationBeforeTransitions.query[searchQuery];
  if (searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    return state.suppliers.data.filter(item => contains(item, searchTerm));
  }
  return state.suppliers.data;
}

function pageData(data, state) {
  const pageSize = 10;
  const pageTerm = state.routing.locationBeforeTransitions.query[pageQuery];
  const page = pageTerm ? parseInt(pageTerm) : 1;
  let pageTotal = Math.ceil(data.length / 10);
  pageTotal = pageTotal < 1 ? 1 : pageTotal;
  const start = (page - 1)*pageSize;
  return {
    data: data.slice(start, start + pageSize),
    page,
    pageTotal
  };
}

const mapStateToProps = (state) => {
  const filteredData = filterData(state);
  const data = pageData(filteredData, state);

  return Object.assign(data, {
    entityComponent: SupplierRowComponent,
    headers
  });
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

    },
    goToPage: (page) => {
      dispatch(push(routes.suppliers + '?' + pageQuery + '=' + page));
    }
  }
}

const SuppliersPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityListPageComponent)

export default SuppliersPage
