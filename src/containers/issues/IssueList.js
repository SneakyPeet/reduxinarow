import { connect } from 'react-redux'
import IssueListComponent from '../../components/issues/IssueListComponent'

const mapStateToProps = (state) => {
  return {
    issues: state.issues
  }
}

const mapDispatchToProps = () => {
  return {};
}

const IssueList = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueListComponent)

export default IssueList
