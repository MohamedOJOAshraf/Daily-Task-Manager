import './mainPage.css'

import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="sidebar-container">
            <h2 className="logo">Logo</h2>
            <ul>
                <Link to='addTask'  ><i class="fa-solid fa-plus"></i> Add task</Link>
                <Link to='/' ><i class="fa-solid fa-list-check"></i> Tasks</Link>
            </ul>
        </div>
    )
}

export default Sidebar