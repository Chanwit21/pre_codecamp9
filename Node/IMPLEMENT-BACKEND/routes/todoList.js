const express = require("express");
const router = express.Router();
const todoListControllers = require("../controllers/todoList");

router.get("/", todoListControllers.getTodoList);
router.post("/", todoListControllers.createTodoList);
router.put("/:id", todoListControllers.updateTodoList);
router.delete("/:id", todoListControllers.deleteTodoList);

module.exports = router;
