export const login = (user) => ({
  type: "LOGIN",
  user
});

export const logout = () => ({
  type: "LOGOUT"
});

export const signup = (user) => ({
  type: "SIGNUP",
  user
});

export const receiveCurrentUser = (user) => ({
  type: "RECEIVE_CURRENT_USER",
  user
});

export const receiveSessionErrors = (errors) => ({
  type: "RECEIVE_SESSION_ERRORS",
  errors
});

export const clearSessionErrors = () => ({
  type: "CLEAR_SESSION_ERRORS"
});

export const getVotes = () => ({
  type: "GET_VOTES"
});

export const receiveVotes = (votes) => ({
  type: "RECEIVE_VOTES",
  votes
});

export const getUserAnswers = () => ({
  type: "GET_USER_ANSWERS"
});

export const receiveSessionAnswers = (answers) => ({
  type: "RECEIVE_SESSION_ANSWERS",
  answers
});
