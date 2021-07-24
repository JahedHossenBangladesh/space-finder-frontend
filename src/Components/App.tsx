import React from "react";
import { User } from "../Model/Model";
import { AuthService } from "../services/AuthService";
import "./App.css";
import { Login } from "./Login";
interface AppState {
  user: User | undefined;
}
export class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService();
  constructor(props: any) {
    super(props);
    this.setUser = this.setUser.bind(this);
  }
  private setUser(user: User) {
    this.setState({ user: user });
    console.log(`use is ${user}`);
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World from Class base Components with TypeScript </h1>
        <Login authService={this.authService} setUser={this.setUser} />
      </div>
    );
  }
}

// function App() {
//   return (
//
//   );
// }

// export default App;
