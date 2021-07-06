import React, { Component, useState } from "react";
import "../App.css";

function Todo() {
  const [toDoList, setToDoList] = useState([]);
  const [text, setText] = useState("");
  const [doneList, setDoneList] = useState([]);

  const addToDo = () => {
    setToDoList([...toDoList, text]);
    setText("");
  };

  const isDoneToDo = (index) => {
    let move = toDoList.splice(index, 1);
    setDoneList([...doneList, move]);
    setToDoList([...toDoList]);
  };

  const deleteList = (index) => {
    doneList.splice(index, 1);
    setDoneList([...doneList]);
  };

  return (
    <html lang="en">
      <head>
        <title>Document</title>
        <link rel="stylesheet" href="./sty.css"></link>
      </head>
      <body>
        <div className="section">
          <div className="toDo">
            <h1>To Do List</h1>
            <div>
              <ul style={{ listStyle: "none" }}>
                {toDoList.map((value, index) => (
                  <li style={{zIndex:1}}>
                    {value}
                    <button onClick={() => isDoneToDo()}>Done</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="addTodo">
              <input
                type="text"
                value={text}
                placeholder="Add To Do List"
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={addToDo}>Add</button>
            </div>
          </div>
          <div
            className="done"
          >
            <h1>Done:</h1>
            <ul style={{ listStyle: "none" }}>
              {doneList.map((value, index) => (
                <li>
                  {value}{" "}
                  <button onClick={() => deleteList(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Todo;
