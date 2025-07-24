const taskModel = require('../model/task-model');
const statusText = require('../utils/statusText')

const getAllTasks = async (req, res) => {
    try {
        // // pagination
        // const query = req.query;
        // const limit = query.limit || 2;
        // const page = query.page || 1;
        // const skip = (page - 1) * limit

        const tasks = await taskModel.find()
        return res.status(201).json(tasks)

    } catch (err) {
        return res.json(err)
    }
}

const getTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await taskModel.findById(taskId);

        console.log(task)
        // check if task isn't found
        if (!task)
            return res.status(404).json('this task is not found')

        return res.status(200).json(task)
    } catch (err) {

    }
}

const patchTask = async (req, res) => {
    try {
        const taskId = req.params.id;

        const task = await taskModel.findById(taskId)

        // check if task isn't found
        if (!task)
            return res.status(404).json('this task is not found')


        const updated = await taskModel.findByIdAndUpdate(taskId, req.body)
        return res.status(201).json({ status: statusText.SUCCESS, data: updated })

    } catch (err) {
        return res.status(404).json({ state: statusText.ERROR, msg: err })
    }
}

const createTask = async (req, res) => {
    try {
        const { name, id } = req.body
        const newTask = new taskModel({
            name,
            id
        })

        await newTask.save()
        return res.status(201).json(newTask)
    } catch (err) {
        return res.status(404).json({ state: statusText.ERROR, msg: err })
    }
}

const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;

        const task = await taskModel.findById(taskId)

        // check if task isn't found
        if (!task)
            return res.status(404).json('this task is not found')


        await taskModel.findByIdAndDelete(taskId)
        return res.status(201).json('This task is deleted successfuly')

    } catch (err) {
        return res.status(404).json({ state: statusText.ERROR, msg: err })
    }

}

module.exports = {
    getAllTasks,
    patchTask,
    createTask,
    getTask,
    deleteTask
}