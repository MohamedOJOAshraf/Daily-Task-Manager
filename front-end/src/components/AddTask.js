import { useState } from 'react'
import './mainPage.css'
import axios from 'axios'

function AddTask() {
    const api_url = 'http://localhost:4000'

    const [taskName, setTaskName] = useState('')

    const eventSubmit = (e) => {
        e.preventDefault()

        axios.post(`${api_url}/createTask`, {
            name: taskName
        }).then(res => console.log(res))
    }
    return (
        <div className='addTask' >

            <div className='input-box'>
                <form onSubmit={eventSubmit}>
                    <input type='text' placeholder='Task Name' onChange={(e) => setTaskName(e.target.value)} />
                    <div></div>
                    <button type='submit'>submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddTask;