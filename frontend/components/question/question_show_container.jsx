import { connect } from 'react-redux';
import QuestionShow from './question_show';
import * as VOTE_ACTIONS from '../../actions/vote_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  questions: state.question.questions,
  answerVotes: state.session.votes
});

const mapDispatchToProps = dispatch => ({
  upvote: (vote) => dispatch(VOTE_ACTIONS.upvote(vote)),
  editUpvote: (vote) => dispatch(VOTE_ACTIONS.editUpvote(vote))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);
