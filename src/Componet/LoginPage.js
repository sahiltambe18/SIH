import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Caveat" />

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleLogin = () => {
    // You can implement your login logic here
    // For this example, we'll just log the username and password to the console
    console.log('Username:', this.state.username);
    console.log('Password:', this.state.password);
  }

  handleRegister=()=>{
    const navigate = useNavigate(); // Use the useNavigate hook
    navigate('/signup');
    
  }

  render() {
    return (
      <div className="container mt-5" style={{ backgroundColor: '#f0f0f0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
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
                    <h2 className="card-title my-4 login-heading">Login</h2>
                    <p className='welcome'>Welcome back!! Please login to tour account.</p>
                    <form>
                      <div className="form-group my-3">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Enter your username"
                          value={this.state.username}
                          onChange={this.handleUsernameChange}
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
                        onClick={this.handleLogin}
                      >
                        Login
                      </button>
                      <button
                        type="button"
                        className="btn btn-block my-3 mx-4 stylish-button"
                        onClick={this.handleRegister}
                      >
                        Register
                      </button>
                      <p className="forgot-password">
                        <a href="/">Forgot Password?</a>
                      </p>
                    </form>
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
//export default LoginPage; 
export default LoginPage;