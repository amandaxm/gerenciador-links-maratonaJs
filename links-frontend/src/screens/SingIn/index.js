import React from 'react'
const SignIn = () => {
    return (
        <div className="container h-100 pt-5">
          <h1>Sign In</h1>
          <div className="d-flex flex-column h-100">
            <form>
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
export default SignIn;