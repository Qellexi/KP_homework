// routes/todoRoutes.js

const express = require('express');
const router = express.Router();
const todoController = require('C:/Users/Samsung/PhpstormProjects/kp_it_hillel/kp/20_lec/todo-api/controllers/todoController');

// CRUD routes
router.post('/todos', todoController.createTodo);
router.get('/todos', todoController.getTodos);
router.get('/todos/:id', todoController.getTodoById);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
