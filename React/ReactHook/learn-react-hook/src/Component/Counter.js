import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "reset":
      return { ...state, counter: 0 };
    case "addText":
      return { ...state, text: [...state.text, action.text] };
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0, text: [] });
  const [text, setText] = useState("");
  return (
    <div style={{ textAlign: "center" }}>
      {state.counter}
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault(); //เพื่อให้เวลาใส่ข้อมูลจะไม่ refresh หน้า
            dispatch({ type: "addText", text });
            setText("");
          }}
        >
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </form>
        <ul>
          {state.text.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
