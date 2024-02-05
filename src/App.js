import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'Muhammed jaafer Omer',
      company: 'new company'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {this.state.name} i am going to a new {this.state.company}</p>
          <button onClick={() => {this.setState({name: 'Andrei'})}}>
            Get the current user
          </button>
        </header>
      </div>
    );
  }
}

export default App;