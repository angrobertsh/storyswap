import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      location: "",
      age: "",
      url: ""
    };
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.otherAction = this.otherAction.bind(this);
    this.otherInputs = this.otherInputs.bind(this);
  }

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  componentDidUpdate() {
    if(this.props.loggedIn){
      this.props.router.push('/');
    }
  }

  renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`} className="session-error">
						{error}
					</li>
				))}
			</ul>
		);
	}

  handleSubmit(e){
		e.preventDefault();
    const formType = this.props.location.pathname.slice(1)
    const processForm = (formType === 'login') ? this.props.login : this.props.signup;
		let user = this.state;
    if(parseInt(user["age"])){
      user["age"] = parseInt(user["age"]);
    } else {
      user["age"] = null;
    }
		processForm({user});
	}

  otherAction (formType) {
    if (formType === "login") {
      return (<div className="session-greet">
        Log in (or <Link to="/signup">sign up</Link>)
      </div>);
    } else {
      return (<div className="session-greet">
        Sign up (or <Link to="/login">log in</Link>)
      </div>);
    }
  }

  otherInputs (formType) {
    if (formType === "login") {
      return;
    } else {
      return (
        <div className="signup-inputs">
          <input type="text" onChange={this.update("location")} value={this.state.location} className="session-input" placeholder="Location"/>
          <input type="text" onChange={this.update("age")} value={this.state.age} className="session-input" placeholder="Age (optional)"/>
        </div>
      );
    }
  }

  render() {
    const formType = this.props.location.pathname.slice(1);
    const otherLink = this.otherAction(formType);
    const location = this.otherInputs(formType);
    return (
      <div className="session-form-container">
				<form onSubmit={this.handleSubmit} className="session-form">
          { otherLink }
          <span className="session-errors errors">{ this.renderErrors() }</span>
          <div className="session-input">
            <input type="text" onChange={this.update("username")} value={this.state.username} className="session-input" placeholder="Username"/>
            <input type="password" onChange={this.update("password")} value={this.state.password} className="session-input" placeholder="Password"/>
            { location }
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    );
  }

}



export default withRouter(SessionForm);
