import { connect } from 'react-redux';
import AppRouter from './router';
import * as SESSION_ACTIONS from '../../actions/session_actions';
import * as QUESTION_ACTIONS from '../../actions/question_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(SESSION_ACTIONS.clearSessionErrors()),
  clearAnswerErrors: () => dispatch(QUESTION_ACTIONS.clearAnswerErrors()),
  fetchAllQuestions: () => dispatch(QUESTION_ACTIONS.fetchAllQuestions()),
  fetchSingleQuestion: (id) => dispatch(QUESTION_ACTIONS.fetchSingleQuestion(id)),
  fetchSingleAnswer: (id) => dispatch(QUESTION_ACTIONS.fetchSingleAnswer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
