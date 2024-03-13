const express = require('express')
const router = express.Router();
console.log('router innn')
const { getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask, } = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router