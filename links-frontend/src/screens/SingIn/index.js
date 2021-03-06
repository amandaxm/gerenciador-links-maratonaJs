import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { signIn } from '../../actions/AccountActions';

const SignIn = (props) => {
  const {account, signIn} = props;

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData);
    signIn(data);
  };
  
  if (account) {
    return <Redirect to="/manage/links" />;
  }

  
  return (
        <div className="container h-100 pt-5">
          <h1>Sign In</h1>
          <div className="d-flex flex-column h-100">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" name="email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" />
              </div>
              <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
            </form>
            </div>
            </div>
    )
}
const mapStateToProps = (state) => {
  return { account: state.account.account };
};
export default connect(mapStateToProps, {signIn})(SignIn);