import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import CardList from "./CardList";
import Card from "./Card";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Route >
        <Route exact path="/cardlist">
          <CardList />
        </Route >
      </Switch>
    </BrowserRouter>
  );
}

export default App;
