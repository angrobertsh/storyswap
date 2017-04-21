import { connect } from 'react-redux';
import CommentForm from './comment_form';
import * as QUESTION_ACTIONS from '../../actions/question_actions';

const mapStateToProps = state => ({
  errors: state.question.commentErrors,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  postComment: (comment) => dispatch(QUESTION_ACTIONS.postComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
