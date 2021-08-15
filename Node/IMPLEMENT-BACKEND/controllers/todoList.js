const { uniqueId } = require("lodash");

let todoList = [];

const getTodoList = (req, res) => {
  res.status(200).send(todoList);
};

const createTodoList = (req, res) => {
  const newTodo = {
    id: uniqueId(),
    task: req.body.task,
  };
  todoList.push(newTodo);
  res.status(201).send(todoList);
};

const updateTodoList = (req, res) => {
  const targetId = "" + req.params.id;
  const targetIndex = todoList.findIndex(todo => todo.id === targetId);
  todoList[targetIndex] = {
    id: targetId,
    task: req.body.task,
  };
  res.status(200).send({ message: "Updating is Success" });
};

const deleteTodoList = (req, res) => {
  const targetId = "" + req.params.id;
  todoList = todoList.filter(todo => todo.id !== targetId);
  res.status(204).send();
};

module.exports = {
  createTodoList,
  getTodoList,
  updateTodoList,
  deleteTodoList,
};
