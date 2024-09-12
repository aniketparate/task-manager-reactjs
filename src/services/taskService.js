import axios from "axios";

const apiUrl = 'http://localhost:5000/tasks'

const fetchTasks = async () => {
    try {
        const response = await axios.get(apiUrl)
        return response.data
    } catch (error) {
        throw error;
    }
}

const addTasks = async (task) => {
    try {
        const response = await axios.post(apiUrl, task)
        return response
    } catch (error) {
        throw error;
    }
}

const delTasks = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`)
        return response
    } catch (error) {
        throw error
    }
}

const toggleTasks = async(id, task) => {
    try {
        const response = await axios.patch(`${apiUrl}/${id}`, task)
        return response
    } catch (error) {
        throw error
    }
}

export { fetchTasks, addTasks, delTasks, toggleTasks }