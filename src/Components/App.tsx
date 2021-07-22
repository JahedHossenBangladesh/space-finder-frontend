import React from "react";
import { User } from "../Model/model";
import { AuthService } from "../services/AuthService";
import "./App.css";
interface AppState {
  user: User | undefined;
}
export class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService();

  render() {
    return (
      <div className="App">
        <h1>Hello World from Class base Components</h1>
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
