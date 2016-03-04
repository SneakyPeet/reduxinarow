import { connect } from 'react-redux'
import NavBarComponent from '../../components/navigation/NavBarComponent'

const makeNavLink = (to, text) => {
  return {
    to,
    text
  }
}

const getNavLinks = (path) => {
  const navLinks = [
    makeNavLink('/issues','Issues'),
    makeNavLink('/suppliers','Suppliers'),
    makeNavLink('/vouchers','Voucher'),
    makeNavLink('/','About')
  ];
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].isActive = navLinks[i].to === path;
  }
  return navLinks;
}

const mapStateToProps = (state) => {
  return {
    navLinks: getNavLinks(state.routing.locationBeforeTransitions.pathname)
  }
}

const mapDispatchToProps = () => {
  return {};
}

const Navigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComponent)

export default Navigation
