import logo from "../logo.svg";
import "../App.css";
import React, { useContext } from "react";
import Context, { Context2 } from "../Context";

const Home = () => {
  const { state, setState, text, textUpdate } = useContext(Context2);
  // console.log({state})
  // console.log({text})
  const changeText = () => {
    const update = state.content;
    // console.log(update)
    textUpdate({ content: update });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <span> {text.content}</span>
        </p>
        <input
          type="text"
          placeholder={"Input your Text"}
          value={state.content}
          onChange={(e) => setState({ content: e.target.value })}
          onClick={() => console.log({ state })}
        ></input>
        <button onClick={() => {changeText()}}> Click To Change</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <div> this is a value from context : {value}</div> */}
    </div>
  );
};

export default Home;
