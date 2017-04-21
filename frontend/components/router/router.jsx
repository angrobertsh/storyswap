import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';
import QuestionIndexContainer from '../question/question_index_container';
import QuestionShowContainer from '../question/question_show_container';
import QuestionFormContainer from '../question_form/question_form_container';
import AnswerFormContainer from '../answer_form/answer_form_container';
import SplashContainer from '../splash/splash_container';
import App from '../app';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._ensureAdmin = this._ensureAdmin.bind(this);
    this._fetchSingleQuestion = this._fetchSingleQuestion.bind(this);
    this._populateSplash = this._populateSplash.bind(this);

    // <Route path="/user/my_answers" component={ AnswerIndexContainer } onEnter={this._fetchUserAnswers} />


    this.routerconst = (
      <Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ App } onEnter={this.props.fetchAllQuestions}>
          <IndexRoute component={ SplashContainer } onEnter={this._populateSplash}/>
          <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="/question" component={ QuestionIndexContainer } onEnter={this.props.fetchAllQuestions} />
          <Route path="/question/new" component={ QuestionFormContainer } onEnter={this._ensureAdmin} />
          <Route path="/question/:id" component={ QuestionShowContainer } onEnter={this._fetchSingleQuestion} />
          <Route path="/question/:id/answer" component={ AnswerFormContainer } onEnter={this._fetchSingleQuestion} />
        </Route>
      </Router>
    )
  }

  _redirectIfLoggedIn(nextState, replace){
    this.props.clearSessionErrors();
    if(this.props.currentUser){
      replace('/');
    }
  }

  _ensureLoggedIn(nextState, replace){
    if(!this.props.currentUser){
      replace('/signup');
      return false;
    }
    return true;
  }

  _ensureAdmin(nextState, replace){
    this.props.clearAnswerErrors();
    if(!this.props.currentUser.admin){
      replace('/');
    }
  }

  _fetchSingleQuestion(nextState, replace){
    this.props.fetchSingleQuestion(parseInt(nextState.params.id));
  }

  _populateSplash(nextState, replace){
    this.props.fetchAllQuestions();
    this.props.fetchSingleAnswer(Math.floor(Math.random()*5)+1);
  }

  // _fetchUserAnswers(nextState, replace){
  //  if(this._ensureLoggedIn(nextState, replace)){
  //    this.props.getUserAnswers();
  //  }
  // }

  render(){
    return this.routerconst;
  }
}

export default AppRouter;
