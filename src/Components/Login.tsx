import React, { SyntheticEvent } from "react";
import { User } from "../Model/Model";
import { AuthService } from "../services/AuthService";
interface LoginProps {
  authService: AuthService;
  setUser: (user: User) => void;
}
interface LoginState {
  userName: string;
  password: string;
  loginAttempted: boolean;
  loginSuccessful: boolean;
}
interface CustomEvent {
  target: HTMLInputElement;
}
export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: "",
    password: "",
    loginAttempted: false,
    loginSuccessful: false,
  };
  private setUserName(event: CustomEvent) {
    this.setState({ userName: event.target.value });
  }

  private setPassword(event: CustomEvent) {
    this.setState({ password: event.target.value });
  }
  private async handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    this.setState({ loginAttempted: true });
    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password
    );
    if (result) {
      this.setState({ loginSuccessful: true });
      this.props.setUser(result);
    } else {
      this.setState({ loginSuccessful: false });
    }
  }
  render() {
    let loginMessage: any;
    if (this.state.loginAttempted) {
      loginMessage = this.state.loginSuccessful ? (
        <label>Login Successful</label>
      ) : (
        <label>Login fail</label>
      );
    }
    return (
      <div>
        <h1>This is Login</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.userName}
            onChange={(e) => this.setUserName(e)}
          />{" "}
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setPassword(e)}
          />{" "}
          <br />
          <input type="submit" value="Submit it" />
          <br />
          {loginMessage}
        </form>
      </div>
    );
  }
}
