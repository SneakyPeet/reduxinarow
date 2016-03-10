import { connect } from 'react-redux'
import { fetchIssues } from '../../actions/issues'
import { classes } from '../../constants'
import EntityListPageComponent from '../../components/entityListPage/EntityListPageComponent'
import IssueRowComponent from '../../components/issues/IssueRowComponent'

const headers = [{
    text: 'Title',
    class: classes.nonNumericCell
  }, {
    text: 'Publisher',
    class: classes.nonNumericCell
  }
]

const mapStateToProps = (state) => {
  return {
    data: state.issues.data,
    entityComponent: IssueRowComponent,
    headers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      dispatch(fetchIssues());
    },
    selectedEntity: () => {
      //const route = routes.issues + '/' + id;
    }
  }
}

const IssuesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityListPageComponent)

export default IssuesPage
