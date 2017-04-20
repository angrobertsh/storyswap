import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.admin = this.admin.bind(this);
  }

  admin(){
    if(this.props.currentUser.admin){
      return (<Link to="/question/new"><div className="greeting-admin">Add a Question</div></Link>)
    } else { return; }
  }

  render(){
    if(this.props.currentUser){
      return (
        <div className="greeting-container">
          <Link to={"/"}><div className="greeting-title">The Story Swap</div></Link>
          <div className="greeting-welcome">Welcome {this.props.currentUser.username}!</div>
          { this.admin() }
          <div className="greeting-auth-button" onClick={this.props.logout}>Logout</div>
        </div>
      );
    } else {
      return (
        <div className="greeting-container">
          <Link to={"/"}><div className="greeting-title">The Story Swap</div></Link>
          <Link to={"/signup"}><div className="greeting-auth-button">Signup</div></Link>
          <Link to={"/login"}><div className="greeting-auth-button">Login</div></Link>
        </div>
      )
    }
  }
}

export default Greeting;
