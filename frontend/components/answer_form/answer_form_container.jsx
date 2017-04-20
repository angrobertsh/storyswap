import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import * as QUESTION_ACTIONS from '../../actions/question_actions';
import * as VOTE_ACTIONS from '../../actions/vote_actions';

const mapStateToProps = state => ({
  errors: state.question.answerErrors,
  currentUser: state.session.currentUser,
  answers: state.session.answers,
  questions: state.question.questions,
  answerVotes: state.session.votes
});

const mapDispatchToProps = dispatch => ({
  postAnswer: (answer) => dispatch(QUESTION_ACTIONS.postAnswer(answer)),
  upvote: (vote) => dispatch(VOTE_ACTIONS.upvote(vote)),
  editUpvote: (vote) => dispatch(VOTE_ACTIONS.editUpvote(vote))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm);
