import React from 'react';
import { Link, withRouter } from 'react-router';
import AnswerIndexItem from '../answer/answer_index_item';
import QuestionIndex from '../question/question_index';

class Splash extends React.Component{

  constructor(props){
    super(props);
    // this.state = {
    //   questionNumber: null
    // };
    this.answerItem = this.answerItem.bind(this);
  }

  // componentWillReceiveProps(nextProps){
  //   if(Object.keys(nextProps.questions).length > 0 && Object.keys(this.props.questions).length === 0){
  //     let rand = Math.floor(Object.keys(nextProps.questions).length*Math.random());
  //     this.setState({questionNumber: rand});
  //     this.props.fetchSingleQuestion(rand);
  //   }
  // }
  //
  // answerItem(){
  //   if(this.state.questionNumber && this.props.questions[this.state.questionNumber].answers){
  //     let rand = Math.floor(Math.random()*this.props.questions[this.state.questionNumber].answers.length);
  //     let answer = this.props.questions[this.state.questionNumber].answers[rand];
  //     return <AnswerIndexItem key={answer.id} answer={answer} currentUser={this.props.currentUser} answerVotes={this.props.answerVotes} upvote={this.props.upvote} editUpvote={this.props.editUpvote}/>
  //   } else {
  //     return;
  //   }
  // }

  answerItem() {
    if(Object.keys(this.props.splashAnswer).length > 0 && Object.keys(this.props.questions).length > 0){
      let answer = this.props.splashAnswer;
      return (<div className="answer-splash">
        <span className="answer-splash-question"> { this.props.questions[answer.question_id].title } </span>
        <AnswerIndexItem key={answer.id} answer={answer} currentUser={this.props.currentUser} answerVotes={this.props.answerVotes} upvote={this.props.upvote} editUpvote={this.props.editUpvote}/>
      </div>)
    } else {
      return;
    }
  }

  render() {
    let response = this.answerItem();
    return (
        <div className="splash">
          { response }
          <QuestionIndex currentUser={this.props.currentUser} questions={this.props.questions} />
        </div>
    );
  }

}



export default withRouter(Splash);
