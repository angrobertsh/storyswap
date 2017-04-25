import React from 'react';
import { Link, withRouter } from 'react-router';

class QuestionForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  handleSubmit(e){
		e.preventDefault();
    this.props.postQuestion(this.state);
	}

  renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`} className="question-error">
						{error}
					</li>
				))}
			</ul>
		);
	}

  render() {
    return (
      <div className="question-form-container">
				<form onSubmit={this.handleSubmit} className="question-form">
          <span className="question-form-title">Add a New Question</span>
          <span className="question-errors">{ this.renderErrors() }</span>
          <div className="question-input">
            <input type="text" onChange={this.update("title")} value={this.state.title} className="question-input" placeholder="Title"/>
            <input type="text" onChange={this.update("description")} value={this.state.description} className="question-input" placeholder="Description (optional)"/>
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(QuestionForm);
