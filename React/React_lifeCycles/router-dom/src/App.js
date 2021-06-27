import logo from './logo.svg';
import './App.css';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/'><div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <Todo />
            </header>
          </div></Route>
          <Route path="/hook">
            <Counter />
          </Route>
    </Switch>
  );
}

export default App;
