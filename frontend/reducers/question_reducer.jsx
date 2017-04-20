import merge from 'lodash/merge';

const defaultState = {
  questions: {},
  splashAnswer: {},
  answerErrors: [],
  questionErrors: []
};


const QuestionReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    case "RECEIVE_QUESTIONS":
      newState = merge(newState, {questions: action.questions});
      return newState;
    case "RECEIVE_SINGLE_ANSWER":
      newState = merge(newState, {splashAnswer: action.answer});
      return newState;
    // case "RECEIVE_SINGLE_QUESTION":
    //   newState = merge(newState, {questions: action.question, errors: null}, {errors: []});
    //   return newState;
    case "RECEIVE_ANSWER_ERRORS":
      newState = merge(newState, {answerErrors: action.errors});
      return newState;
    case "RECEIVE_QUESTION_ERRORS":
      newState = merge(newState, {questionErrors: action.errors});
      return newState;
    case "CLEAR_ANSWER_ERRORS":
      newState = merge(newState, {answerErrors: null, questionErrors: null}, {answerErrors: [], questionErrors: []});
      return newState;
    default:
      return newState;
  }
}


export default QuestionReducer;
