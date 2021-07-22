import React from "react";
import { AuthService } from "../services/AuthService";
interface LoginProps {
  authService: AuthService;
}
interface LoginState {
  userName: string;
  password: string;
  loginAttempted: boolean;
  loginSuccessful: boolean;
}
export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: "",
    password: "",
    loginAttempted: false,
    loginSuccessful: false,
  };

  render() {
    return (
      <div>
        <h1>This is Login</h1>
        <form>
          <input type="text" value={this.state.userName} /> <br />
          <input type="password" value={this.state.password} /> <br />
          <input type="submit" value="Submit it" />
        </form>
      </div>
    );
  }
}
