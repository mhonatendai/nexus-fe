// import React, { Component } from 'react';

// class Login extends Component {

//   handleLogin = () => {
//     this.props.onLogin(); // Call the onLogin function passed as a prop from App.js
//   };

//   render() {
//     return (
      
//       <form>
//         <h3>Sign In</h3>
//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>
//         <div className="mb-3">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>
//         <div className="d-grid">
//           <button onClick={this.handleLogin} type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Forgot <a href="#">password?</a>
//         </p>
//       </form>
//     )
//   }
// }

// export default Login;


import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Login extends Component {
  handleLogin = () => {
    const navigate = useNavigate();

    // Perform login logic here

    // After successful login, navigate to the Dashboard component
    navigate('/dashboard');
  };

  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;