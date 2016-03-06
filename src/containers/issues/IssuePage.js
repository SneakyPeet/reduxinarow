import { connect } from 'react-redux'
import { fetchIssues } from '../../actions/issues'
import IssuePageComponent from '../../components/issues/IssuePageComponent'

const mapStateToProps = (state) => {
  return {
    isFetching: state.issues.isFetching,
    issues: state.issues.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIssues: () => {
      dispatch(fetchIssues());
    }
  }
}

const IssuePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuePageComponent)

export default IssuePage
