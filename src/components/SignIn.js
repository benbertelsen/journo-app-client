
import React from "react";
import { signIn } from "../api";
import { NavLink } from "react-router-dom";
import '../styles/Signup.css' 
import '../styles/Frontpage.css' 


// ✋ is there a deeper issue with shifting between hooks and classes??
//Classes used here because code could be copied almost 1:1 from previous proejct

class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
  };
 
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
 
  handleFormSubmit = async (event) => {
    event.preventDefault();
      const user = await signIn(this.state);
      this.props.setLoggedInUser(user.data);
    //   toast.success("Login successful");
      this.props.history.push("/");
  };
 
  render() {
    const { username, password } = this.state;
    return (
      <>
      <h1 className="h1-singup">...writing is re-writing. <br></br>With persistent cookies, this sign-in isn't.</h1>
        <form className="signup-form" onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input className="input-signup"
            type="text"
            name="username"
            onChange={this.handleChange}
            value={username}
          />
          <label>Password</label>
          <input className="input-signup"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button className="create-blogpost-btn" type="submit">Get started</button>
          <p>
          Not there yet? Take me to <NavLink to="/signup" className="landing-catchphrase-link">signup</NavLink>.
        </p>
        </form>
      </>
    );
  }
}

export default SignIn;