import { connect } from 'react-redux';
import QuestionForm from './question_form';
import * as QUESTION_ACTIONS from '../../actions/question_actions';

const mapStateToProps = state => ({
  errors: state.question.questionErrors
});

const mapDispatchToProps = dispatch => ({
  postQuestion: (question) => dispatch(QUESTION_ACTIONS.postQuestion(question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
