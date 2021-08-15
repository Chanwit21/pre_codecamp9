const express = require('express');
const router = express.Router();
const todoListContollers = require('../controllers/todoList');

router.get('/', todoListContollers.getTodoList);
router.post('/', todoListContollers.addTodoList);
router.put('/:id', todoListContollers.updateTodoList);
router.delete('/:id', todoListContollers.deleteTodoList);

module.exports = router;