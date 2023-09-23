import React, { Component } from 'react';
import './Login.css'
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Caveat" />

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collegeCode: '',
      collegeName: '',
      password: '',
    };
  }

  handleCollegeCodeChange = (e) => {
    this.setState({ collegeCode: e.target.value });
  }

  handleCollegeNameChange = (e) => {
    this.setState({ collegeName: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleSignup = () => {
    // Implement your signup logic here
    // You can send the form data to your server or perform any other actions
    console.log('College Code:', this.state.collegeCode);
    console.log('College Name:', this.state.collegeName);
    console.log('Password:', this.state.password);
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                  <img
                      src="https://i.pinimg.com/564x/37/86/b3/3786b326c62769f705bef9df318a52e8.jpg"
                      alt="login" 
                      className="img-fluid" 
                    />
                  </div>
                  <div className="col-md-6">
                    <h2 className="card-title my-4 signup-heading">Sign Up</h2>
                    <p className='welcome'>Welcome to EventSpectrum !!</p>
                    <form>
                      <div className="form-group my-3">
                        <label htmlFor="collegeCode">College Code</label>
                        <input
                          type="text"
                          className="form-control"
                          id="collegeCode"
                          placeholder="Enter college code"
                          value={this.state.collegeCode}
                          onChange={this.handleCollegeCodeChange}
                        />
                      </div>
                      <div className="form-group my-3">
                        <label htmlFor="collegeName">College Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="collegeName"
                          placeholder="Enter college name"
                          value={this.state.collegeName}
                          onChange={this.handleCollegeNameChange}
                        />
                      </div>
                      <div className="form-group my-3">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Enter your password"
                          value={this.state.password}
                          onChange={this.handlePasswordChange}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-block my-3 stylish-button"
                        onClick={this.handleSignup}
                      >
                        Sign Up
                      </button>
                    </form>
                    <hr className="my-4" />
                <p className="text-center">Create account with:</p>
                <div className="text-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" // Replace with the actual Google logo URL
                    alt="Google"
                    className="social-logo"
                  />
                  <img
                    src="https://www.shutterstock.com/image-vector/surabaya-indonesia-march-19-2023-250nw-2277155099.jpg" // Replace with the actual Facebook logo URL
                    alt="Facebook"
                    className="social-logo mx-3"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png" // Replace with the actual LinkedIn logo URL
                    alt="LinkedIn"
                    className="social-logo"
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Signup;