export const fetchAllQuestions = () => ({
  type: "FETCH_ALL_QUESTIONS"
});

export const fetchSingleQuestion = (id) => ({
  type: "FETCH_SINGLE_QUESTION",
  id
});

export const fetchSingleAnswer = (id) => ({
  type: "FETCH_SINGLE_ANSWER",
  id
});

export const postAnswer = (answer) => ({
  type: "POST_ANSWER",
  answer
});

export const postQuestion = (question) => ({
  type: "POST_QUESTION",
  question
});

export const receiveSingleAnswer = (answer) => ({
  type: "RECEIVE_SINGLE_ANSWER",
  answer
});

export const receiveQuestions = (questions) => ({
  type: "RECEIVE_QUESTIONS",
  questions
});

export const receiveAnswerErrors = (errors) => ({
  type: "RECEIVE_ANSWER_ERRORS",
  errors
});

export const receiveQuestionErrors = (errors) => ({
  type: "RECEIVE_QUESTION_ERRORS",
  errors
});

export const clearAnswerErrors = () => ({
  type: "CLEAR_ANSWER_ERRORS"
});
