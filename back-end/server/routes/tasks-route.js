const express = require('express');
const router = express.Router();

const { getAllTasks, patchTask, createTask, getTask, deleteTask } = require('../controller/tasks-controller')

router.get('/getAllTasks', getAllTasks);

router.post('/createTask', createTask);

router.route('/getTask/:id').get(getTask)

router.route('/patchTask/:id').patch(patchTask)

router.route('/deleteTask/:id').delete(deleteTask)

module.exports = router 