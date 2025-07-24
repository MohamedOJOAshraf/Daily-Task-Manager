import { Link } from 'react-router-dom';
import './mainPage.css'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'


function TasksPage() {
    const api_url = 'http://localhost:4000'

    const [tasks, setTasks] = useState([])


    const deleteTask = (taskId) => {
        Swal.fire({
            title: 'Do you want to continue?',
            icon: 'question',
            showCancelButton: true,
            showConfirmButton: true,

        }).then(data => {
            if (data.isConfirmed) {
                fetch(`${api_url}/deleteTask/${taskId}`, {
                    method: 'DELETE'
                }).then(res => res.json()).then(() => getTasks())
                Swal.fire({
                    title: 'Deleted successfuly',
                    icon: 'success',
                })
            }

        })
    }

    const getTasks = () => {
        fetch(`${api_url}/getAllTasks`)
            .then(res => res.json())
            .then(data => setTasks(data))

    }



    useEffect(() => {
        getTasks()
    }, [])

    return (
        <div className="tasks-container">
            <h1>Today</h1>
            <Link to='/addTask'><i class="fa-solid fa-plus"></i> Add task</Link>
            <div className='tasks-box'>
                {
                    tasks.map(task => <div className='task'>
                        <h4>
                            <input type='checkbox' key={task._id} onClick={() => {
                                Swal.fire({
                                    title: 'good jub',
                                    icon: 'success',

                                })
                                fetch(`${api_url}/deleteTask/${task._id}`, {
                                    method: 'DELETE'
                                }).then(res => res.json()).then(() => getTasks())


                            }} />
                            {task.name}
                        </h4>
                        <div className="Btn-container">
                            <button onClick={() => deleteTask(task._id)}>Delete</button>
                            <button>Edit</button>
                        </div>
                    </div>)

                }

            </div>
        </div>
    )
}

export default TasksPage;