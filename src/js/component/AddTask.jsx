import React, { useState } from "react";

export const AddTask = () => {
    const [task, setTask] = useState("");
    
    const [taskList, setTaskList] = useState([]);
    const host = "https://playground.4geeks.com/todo";

    const handleChange = (event) => {
        setTask(event.target.value);
    };

        const handleSubmit = async (event) => {
        event.preventDefault();
        const newTask = {
            label: task,
            is_done: false
        };
        await addTask(newTask);
        setTask(""); // Limpiar el input después de agregar la tarea
    };

    const addTask = async (dataToSend) => {
        const uri = host + "/todos/Agus";
        const options = {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            }
        };

        try {
            const response = await fetch(uri, options);
            if (!response.ok) {
                throw new Error(`Failed to add task. Status: ${response.status}`);
            }
            const data = await response.json();
            setTaskList([...taskList, data]);
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const deleteTask = async (taskId) => {
        const uri = host + `/todos/Agus/${taskId}`;
        const options = {
            method: "DELETE"
        };
    
        try {
            const response = await fetch(uri, options);
            if (!response.ok) {
                throw new Error(`Failed to delete task. Status: ${response.status}`);
            }
            // Filtrar la tarea con el ID correspondiente y eliminarla de la lista
            setTaskList(taskList.filter(task => task.id !== taskId));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };
    
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={handleChange}
                    placeholder="Enter task"
                    className="form-control"
                />
                {/* <button type="submit" className="btn btn-success mt-2">Add Task</button> */}
            </form>
            <ul className="list-group">
                {taskList.map((task) => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between">
                        {task.label}
                        <span title="Delete task" onClick={() => deleteTask(task.id)}>
                            <i className="fas fa-trash"></i>
                        </span>
                    </li>
                ))}
                <li className="list-group-item"> <strong>{taskList.length} Tasks</strong> </li>
            </ul>
        </div>
    );
};
