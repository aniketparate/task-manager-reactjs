import React from 'react'
import './style.css'

const TaskItem = ({task, delTask, toggleTask}) => {
  return <>
    <div className='taskitem'>
        <p>Task No: {task.id}</p>
        <p>{task.task}</p>
        <p>Status: <input type='checkbox' checked={task.status === "Completed"} onClick={() => toggleTask(task.id)} />&nbsp;{task.status}</p>
        <button onClick={() => delTask(task.id)}>DEL</button>
    </div>
  </>
}

export default TaskItem
