import { hashHistory } from 'react-router';
import * as QUESTION_ACTIONS from '../actions/question_actions';
import * as SESSION_ACTIONS from '../actions/session_actions';
import * as QUESTION_UTILS from '../util/question_api_util';
import * as ANSWER_UTILS from '../util/answer_api_util';
import * as VOTE_UTILS from '../util/vote_api_util';
import * as COMMENT_UTILS from '../util/comment_api_util';

const SessionMiddleware = ({state, dispatch}) => next => action => {
  let error = (errors) => {
    dispatch(QUESTION_ACTIONS.receiveAnswerErrors(errors.responseJSON.errors));
  };

  let success = (questions) => {
    dispatch(QUESTION_ACTIONS.receiveQuestions(questions));
  };

  switch (action.type){
    case "FETCH_ALL_QUESTIONS":
      QUESTION_UTILS.getAllQuestions(success, error);
      return next(action);
    case "FETCH_SINGLE_QUESTION":
      QUESTION_UTILS.getSingleQuestion(success, error, action.id);
      return next(action);
    case "POST_ANSWER":
      success = (questions) => {
        dispatch(QUESTION_ACTIONS.receiveQuestions(questions));
        dispatch(SESSION_ACTIONS.receiveSessionAnswers({[action.answer.question_id]: {}}));
      }
      ANSWER_UTILS.createAnswer(success, error, action.answer);
      return next(action);
    case "FETCH_SINGLE_ANSWER":
      success = (answer) => {
        dispatch(QUESTION_ACTIONS.receiveSingleAnswer(answer));
      };
      ANSWER_UTILS.getSingleAnswer(success, error, action.id);
      return next(action);
    case "UPVOTE":
      success = (questions) => {
        dispatch(QUESTION_ACTIONS.receiveQuestions(questions));
        dispatch(SESSION_ACTIONS.getVotes());
      }
      VOTE_UTILS.createUpvote(success, error, action.vote);
      return next(action);
    case "EDIT_UPVOTE":
      success = (questions) => {
        dispatch(QUESTION_ACTIONS.receiveQuestions(questions));
        dispatch(SESSION_ACTIONS.getVotes());
      }
      VOTE_UTILS.updateUpvote(success, error, action.vote);
      return next(action);
    case "POST_QUESTION":
      success = (questions) => {
        dispatch(QUESTION_ACTIONS.receiveQuestions(questions));
        hashHistory.push('/');
      }
      error = (errors) => {
        dispatch(QUESTION_ACTIONS.receiveQuestionErrors(errors.responseJSON.errors));
      };
      QUESTION_UTILS.createQuestion(success, error, action.question);
      return next(action);
    case "POST_COMMENT":
      COMMENT_UTILS.createComment(success, error, action.comment)
      return next(action);
    default:
      return next(action);
  }
}


export default SessionMiddleware
