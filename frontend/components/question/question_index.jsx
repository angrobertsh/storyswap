import React from 'react';
import { Link, withRouter } from 'react-router';
import QuestionIndexItem from './question_index_item';

class QuestionIndex extends React.Component{

  constructor(props){
    super(props);
    this.renderQuestions = this.renderQuestions.bind(this);
  }

  renderQuestions(){
    let questions = Object.keys(this.props.questions).reverse();
    return questions.map((key) => {
      return <QuestionIndexItem key={key} question={this.props.questions[key]}/>
    });
  }

  render(){
    return (
      <div id="questions-index-container"><span className="questions-index-header">Answer questions to unlock stories from others!</span>
        <div id="questions-index">
          { this.renderQuestions() }
        </div>
      </div>
    );
  }

}

export default withRouter(QuestionIndex);
