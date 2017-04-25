import { connect } from 'react-redux';
import * as QUESTION_ACTIONS from '../../actions/question_actions';
import * as VOTE_ACTIONS from '../../actions/vote_actions';
import Splash from './splash';

const mapStateToProps = state => ({
  questions: state.question.questions,
  currentUser: state.session.currentUser,
  votes: state.session.votes,
  splashAnswer: state.question.splashAnswer
});

const mapDispatchToProps = dispatch => ({
  upvote: (vote) => dispatch(VOTE_ACTIONS.upvote(vote)),
  editUpvote: (vote) => dispatch(VOTE_ACTIONS.editUpvote(vote)),
  receiveSingleAnswer: (answer) => dispatch(QUESTION_ACTIONS.receiveSingleAnswer(answer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
