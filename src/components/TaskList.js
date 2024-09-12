import React from 'react'
import TaskItem from './TaskItem'
import './style.css'

const TaskList = ({tasks, delTask, toggleTask}) => {
  return <>
    <div className='tasklist'>
        {tasks.map((task,i) => <TaskItem task={task} delTask={delTask} toggleTask={toggleTask} key={i} />)}
    </div>
  </>
}

export default TaskList
