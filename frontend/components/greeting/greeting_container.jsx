import { connect } from 'react-redux';
import Greeting from './greeting';
import * as SESSION_ACTIONS from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SESSION_ACTIONS.logout())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
