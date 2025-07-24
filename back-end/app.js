const express = require('express');
const app = express()
const port = 4000;

const connectionDb = require('./connectionDb')

const tasksRouter = require('./server/routes/tasks-route')

const cors = require('cors')

app.use(cors())

app.use(express.json())


app.use('/', tasksRouter)



const start = async () => {
    try {
        await connectionDb
        app.listen(port, () => console.log('Server Work'))
    } catch (err) {
        console.log(err)
    }
}

start()