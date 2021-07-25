const { uniqueId } = require("lodash");

let todoList = [];

const getTodoList = (req, res) => {
    res.status(200).send(todoList);
};

const addTodoList = (req, res) => {
    const newTodo = {
        id: Number(uniqueId()),
        task: req.body.task
    };

    todoList.push(newTodo);

    res.status(201).send(newTodo);
};

const deleteTodoList = (req, res) => {
    const targetId = Number(req.params.id);
    todoList = todoList.filter(todo => todo.id !== targetId);
    res.status(204).send();
};

const updateTodoList = (req, res) => {
    const targetId = Number(req.params.id);
    const newTask = req.body.task;
    const targetIndex = todoList.findIndex(todo => todo.id === targetId);
    todoList[targetIndex] = {
        id: targetId,
        task: newTask
    };
    res.status(200).send({ message: "updating is success" });
};

module.exports = {
    getTodoList,
    addTodoList,
    deleteTodoList,
    updateTodoList
};