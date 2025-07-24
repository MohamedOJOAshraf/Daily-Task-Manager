import './mainPage.css'

function AddTask() {
    return (
        <div className='addTask'>

            <div className='input-box'>
                <input type='text' placeholder='Task Name' />
                <div></div>
                <button><i class="fa-solid fa-square-caret-right"></i></button>
            </div>
        </div>
    )
}

export default AddTask;