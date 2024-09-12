# React Task Manager

A simple task manager application built with React. This project allows users to add, delete, and toggle the status of tasks.

![image](https://github.com/user-attachments/assets/4be605ab-cc15-47d4-93fa-5818bd79b2b4)

## Features

- Add new tasks
- Delete existing tasks
- Toggle task status between "Incomplete" and "Completed"
- Fetch tasks from a server
- Error handling for various operations

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **Axios**: A promise-based HTTP client for making API requests
- **json-server**: A tool to create a fake REST API with a JSON file
- **concurrently**: A tool to run multiple commands concurrently

## Requirements

To run this project, you'll need the following dependencies:

- `axios`
- `json-server`
- `concurrently`

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Setup the JSON server:**

    Ensure you have a `localStorage.json` file in the root directory with the initial tasks data:

    ```json
    {
      "tasks": []
    }
    ```

4. **Configure scripts in `package.json`:**

    Add the following scripts to your `package.json` file:

    ```json
    "scripts": {
      "start": "react-scripts start",
      "server": "json-server --watch localStorage.json --port 5000",
      "dev": "concurrently \"npm run server\" \"npm start\""
    }
    ```

## Usage

1. **Start the project:**

    Run the following command to start both the React app and the JSON server concurrently:

    ```bash
    npm run dev
    ```

2. **Access the application:**

    Open your browser and navigate to `http://localhost:3000` to view the React application.

3. **Access the JSON server:**

    The JSON server will be running on `http://localhost:5000/tasks`. You can use this URL to check the tasks data or interact with the API directly.

## File Structure

- `src/App.js` - Main application component
- `src/components/TaskForm.js` - Component for adding new tasks
- `src/components/TaskList.js` - Component for listing tasks
- `src/components/TaskItem.js` - Component for displaying task content
- `src/services/taskService.js` - Service for interacting with the tasks API
- `src/App.css` - Application styles
- `localStorage.json` - JSON file used by json-server to store tasks data

## Contributing

Feel free to open issues or submit pull requests if you have any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
