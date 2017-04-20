import { connect } from 'react-redux';
import QuestionIndex from './question_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  questions: state.question.questions
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
