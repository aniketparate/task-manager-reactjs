import React from 'react'
import './style.css'

const TaskForm = ({text, handleChange, onSubmit}) => {
  return <>
    <div>
        <form className='taskform' onSubmit={onSubmit}>
            <input value={text} onChange={(e) => handleChange(e.target.value)} placeholder='Start typing here...' />
            <button type='submit'>Add</button>
        </form>
    </div>
  </>
}

export default TaskForm
