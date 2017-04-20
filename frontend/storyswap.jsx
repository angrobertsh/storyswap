import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as ACTIONS from './actions/session_actions';
import * as ACTIONS2 from './actions/question_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  let store;
  let preloadedState;
  if (window.currentUser){
    preloadedState = {session: {currentUser: window.currentUser}}
  }
  store = configureStore(preloadedState);
  store.dispatch(ACTIONS.getVotes());
  store.dispatch(ACTIONS.getUserAnswers());
  window.store = store;

  window.fetchAllQuestions = ACTIONS2.fetchAllQuestions;
  window.fetchSingleQuestion = ACTIONS2.fetchSingleQuestion;
  window.postAnswer = ACTIONS2.postAnswer;
  window.postQuestion = ACTIONS2.postQuestion;
  window.login = ACTIONS.login;
  window.logout = ACTIONS.logout;
  window.signup = ACTIONS.signup;
  window.getVotes = ACTIONS.getVotes;



  ReactDOM.render(<Root store={ store }/>, root);
});
