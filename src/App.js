import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import { addTasks, fetchTasks, delTasks, toggleTasks } from './services/taskService';
import TaskList from './components/TaskList';

function App() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchTextService = async () => {
      try {
        const result = await fetchTasks();
        setTasks(result)
      } catch (error) {
        setError('Unable to fetch tasks');
      }
    }
    fetchTextService()
  }, [tasks])

  const taskSubmit = async (e) => {
    e.preventDefault();
    if (text.length === 0) {
      setError('Write some tasks...');
      return;
    }
    const nextId = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1
    try{
      let task = {
        id: nextId.toString(),
        task: text,
        status: 'Incomplete'
      }
      await addTasks(task);
      setTasks(preTask => [...preTask, task])
      setText('')
      setError('')
    }catch(error){
      console.log(error);
      setError('Some error occured while adding task')
    }
  }

  const handleChange = (data) => {
    setText(data)
  }

  const delTask = async (id) => {
    try {
      await delTasks(id)
    } catch (error) {
      setError('Some error occured while deleting task')
    }
  }

  const toggleTask = async (id) => {
    try {
      let task = tasks.filter(task => task.id === id)
      task[0].status === 'Incomplete' ? task[0].status = 'Completed' : task[0].status = 'Incomplete'
      await toggleTasks(id, task[0]);
    } catch (error) {
      setError('Some error occured while changing task status')
    }
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm text={text} handleChange={handleChange} onSubmit={taskSubmit} />
      {error.length > 0 && <p className='error-message'>{error}</p>}
      <TaskList tasks={tasks} delTask={delTask} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
