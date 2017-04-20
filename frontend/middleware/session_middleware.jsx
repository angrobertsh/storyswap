import * as SESSION_ACTIONS from '../actions/session_actions';
import * as SESSION_UTILS from '../util/session_api_util';
import * as VOTE_UTILS from '../util/vote_api_util';
import * as ANSWER_UTILS from '../util/answer_api_util';

const SessionMiddleware = ({state, dispatch}) => next => action => {
  const error = (errors) => {
    dispatch(SESSION_ACTIONS.receiveSessionErrors(errors.responseJSON.errors));
  };

  let success = (user) => {
    dispatch(SESSION_ACTIONS.receiveCurrentUser(user));
    dispatch(SESSION_ACTIONS.getVotes());
    dispatch(SESSION_ACTIONS.getUserAnswers());
  };

  switch (action.type){
    case "SIGNUP":
      SESSION_UTILS.signup(success, error, action.user);
      return next(action);
    case "LOGIN":
      SESSION_UTILS.login(success, error, action.user);
      return next(action);
    case "LOGOUT":
      success = (data) => {
        dispatch(SESSION_ACTIONS.receiveCurrentUser(null));
      };
      SESSION_UTILS.logout(success, error)
      return next(action);
    case "GET_VOTES":
      success = (votes) => {
        dispatch(SESSION_ACTIONS.receiveVotes(votes));
      };
      VOTE_UTILS.getCurrentUserVotes(success, error);
      return next(action);
    case "GET_USER_ANSWERS":
      success = (answers) => {
        dispatch(SESSION_ACTIONS.receiveSessionAnswers(answers));
      };
      ANSWER_UTILS.getCurrentUserAnswers(success, error);
    default:
      return next(action);
  }
}


export default SessionMiddleware
