import React, { useState } from "react";
import Home from "./Component/home";
import Context, { Context2 } from "./Context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Counter} from "./Component/Counter";
import Example from "./Component/Example";

function App() {
  const [state, setState] = useState({ content: "" });
  const [text, textUpdate] = useState({ content: "My Fist Time To React" });
  return (
    <Context2.Provider value={{ state, setState, text, textUpdate }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/counter"><Counter/></Route>
          <Route path="/example">
            <Example />
          </Route>
        </Switch>
      </BrowserRouter>
    </Context2.Provider>
  );
}

export default App;
