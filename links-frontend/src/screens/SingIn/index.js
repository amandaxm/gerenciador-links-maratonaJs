import React from 'react';
import {connect} from 'react-redux';
import {SignIn} from './SignInActions';

const SignIn = (props) => {
  const {account, signIn} = props;
    
  const submitHandler=(e)=>{
    e.preventDefault();
   // const data = getFormData(e);
   // signIn(data);
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