import { connect } from 'react-redux';
import SessionForm from './session_form';
import * as SESSION_ACTIONS from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.session.errors,
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(SESSION_ACTIONS.login(user)),
  signup: (user) => dispatch(SESSION_ACTIONS.signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
