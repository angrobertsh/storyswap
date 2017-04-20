import React from 'react';
import { Link, withRouter } from 'react-router';

class QuestionIndexItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    let question = this.props.question

    return (
      <div className="question">
        <div className="question-title"><Link to={`question/${this.props.question.id}/answer`}>
          { question.title }
        </Link></div>
        <div className="question-description">
          { question.description }
        </div>
      </div>
    );
  }

};


export default withRouter(QuestionIndexItem);
