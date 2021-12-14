const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    createNewTask,
    deleteTask,
    changeTaskInfo
} = require('../controllers/task.controller');

//Tasks routes
router.get('/allTasks', getAllTasks);
router.post('/createTask', createNewTask);
router.delete('/deleteTask', deleteTask);
router.patch('/updateTask', changeTaskInfo);

//User routes

module.exports = router;


