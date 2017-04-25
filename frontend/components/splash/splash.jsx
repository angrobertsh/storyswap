import React from 'react';
import { Link, withRouter } from 'react-router';
import AnswerIndexItem from '../answer/answer_index_item';
import QuestionIndex from '../question/question_index';

class Splash extends React.Component{

  constructor(props){
    super(props);
    this.answerItem = this.answerItem.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(JSON.stringify(nextProps.questions) !== JSON.stringify(this.props.questions)){
      if(Object.keys(this.props.questions).length !== 0 && this.props.splashAnswer){
        if(JSON.stringify(nextProps.questions[this.props.splashAnswer.question_id].answers[this.props.splashAnswer.id]) !== JSON.stringify(this.props.splashAnswer)){
          console.log(this.props.splashAnswer)
          let answer = nextProps.questions[this.props.splashAnswer.question_id].answers.find((el) => el.id === this.props.splashAnswer.id)
          this.props.receiveSingleAnswer(answer);
        }
      }
    }
  }

  answerItem() {
    if(Object.keys(this.props.splashAnswer).length > 0 && Object.keys(this.props.questions).length > 0){
      let answer = this.props.splashAnswer;
      return (<div className="answer-splash">
        <span className="answer-splash-question"> { this.props.questions[answer.question_id].title } </span>
        <AnswerIndexItem key={answer.id} answer={answer} currentUser={this.props.currentUser} votes={this.props.votes} upvote={this.props.upvote} editUpvote={this.props.editUpvote}/>
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
