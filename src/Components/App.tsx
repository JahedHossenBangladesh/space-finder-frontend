import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { User } from "../Model/Model";
import { AuthService } from "../services/AuthService";
import history from "../utils/history";
import "./App.css";
import { Home } from "./Home";
import { Login } from "./Login";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";
interface AppState {
  user: User | undefined;
}
export class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService();
  constructor(props: any) {
    super(props);
    this.state = {
      user: undefined,
    };
    this.setUser = this.setUser.bind(this);
  }
  private setUser(user: User) {
    this.setState({ user: user });
    console.log(`use is ${user}`);
  }
  render() {
    return (
      <div className="wrapper">
        {/* <h1>Hello World from Class base Components with TypeScript </h1>
        <Login authService={this.authService} setUser={this.setUser} /> */}
        <Router history={history}>
          <div>
            <Navbar user={this.state.user} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login">
                <Login authService={this.authService} setUser={this.setUser} />
              </Route>
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
