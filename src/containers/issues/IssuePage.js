import { connect } from 'react-redux'
import { fetchIssues } from '../../actions/issues'
import EntityListPageComponent from '../../components/entityListPage/EntityListPageComponent'
import IssueRowComponent from '../../components/issues/IssueRowComponent'

const headers = [{
    text: 'Title',
    class: 'mdl-data-table__cell--non-numeric'
  }, {
    text: 'Publisher',
    class: 'mdl-data-table__cell--non-numeric'
  }
]

const mapStateToProps = (state) => {
  return {
    isFetching: state.issues.isFetching,
    data: state.issues.data,
    entityComponent: IssueRowComponent,
    headers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      dispatch(fetchIssues());
    }
  }
}

const IssuePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityListPageComponent)

export default IssuePage
