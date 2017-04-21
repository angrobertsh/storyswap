import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import * as QUESTION_ACTIONS from '../../actions/question_actions';
import * as VOTE_ACTIONS from '../../actions/vote_actions';

const mapStateToProps = state => ({
  errors: state.question.commentErrors,
  currentUser: state.session.currentUser,
  votes: state.session.votes
});

const mapDispatchToProps = dispatch => ({
  upvote: (vote) => dispatch(VOTE_ACTIONS.upvote(vote)),
  editUpvote: (vote) => dispatch(VOTE_ACTIONS.editUpvote(vote))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
