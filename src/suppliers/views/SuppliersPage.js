import { connect } from 'react-redux';
import { fetchSuppliers, viewSupplier, filterSuppliers, deleteSupplier } from '../actions';
import { routes } from '../../constants';
import form from '../../forms';
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
  let pageTotal = Math.ceil(data.length / 10);
  pageTotal = pageTotal < 1 ? 1 : pageTotal;
  let page = pageTerm ? parseInt(pageTerm) : 1;
  page = page > pageTotal ? pageTotal : page;
  const start = (page - 1)*pageSize;
  return {
    data: data.slice(start, start + pageSize),
    page,
    pageTotal
  };
}

function getPageQuery(searchTerm, page) {
  const newQuery = {}
  if (searchTerm) {
    newQuery[searchQuery] = searchTerm;
  }
  if (page) {
    newQuery[pageQuery] = page;
  }

  const q = [];
  for(let p in newQuery) {
    if (newQuery.hasOwnProperty(p)) {
      q.push(encodeURIComponent(p) + '=' + encodeURIComponent(newQuery[p]));
    }
  }
  return '?' + q.join('&');
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
      const query = ownProps.location.query;
      if (term) {
        dispatch(push(routes.suppliers + getPageQuery(term, query.page)));
      } else {
        dispatch(push(routes.suppliers + getPageQuery(null, query.page)));
      }

    },
    goToPage: (page) => {
      const query = ownProps.location.query;
      dispatch(push(routes.suppliers + getPageQuery(query.search, page)));
    },
    create: () => {
      dispatch(form.init({id:0, name: '', city: '', referenceNumber: ''}));
      dispatch(push(routes.suppliers + '/create'));
    },
    delete: (id) => {
      dispatch(deleteSupplier(id));
    }
  }
}

const SuppliersPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityListPageComponent)

export default SuppliersPage
