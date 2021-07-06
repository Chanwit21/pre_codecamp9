import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter,Switch, Route} from 'react-router-dom'
import Counter from './Counter/Counter';
import Todo from './ToDoList/Todo';
import From from './From/From';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/'><div className="App">
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
    </div></Route>
    <Route exact path='/counter'>
      <Counter/>
    </Route>
    <Route exact path='/todo'>
      <Todo />
    </Route>
    <Route exact path='/from'>
      <From />
    </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
