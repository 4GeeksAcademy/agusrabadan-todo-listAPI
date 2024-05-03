import React, { useEffect, useState } from "react";

const CreateUser = () => {
    /* const [user, setUser] = useState(""); */
    const [name, setName] = useState('');
    const [task, setTask] = useState([]); // Estado para almacenar las tareas
    const host = "https://playground.4geeks.com/todo";
    const spinner = <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>;

    async function getTask() {
        try {
            const response = await fetch("https://playground.4geeks.com/todo/users/Agus");
            if (!response.ok) {
                throw new Error(`Failed to fetch user data. Status: ${response.status}`);
            }
            const data = await response.json();
            setTask(data.todos);
            setName(data.name);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const createUser = async () => {
        const uri = host + "/users/Agus";
        const options = {
            method: "POST",
        };

        try {
            const response = await fetch(uri, options);
            if (!response.ok) {
                throw new Error(`Failed to create user. Status: ${response.status}`);
            }
            const data = await response.json();
            setUser(data.users);
            console.log(data.users);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    useEffect(() => {
        createUser();
    }, []);

    useEffect(() => {
        getTask();
    }, []);


    return (
        <div className="container text-center">
            {!getTask ? spinner : (
                <ul className="list-group">
                    <h1> User: {name} </h1>
                    {task.map((item) => (
                        <li key={item.id} className="list-group-item">
                            <strong className="text-primary">{item.id}</strong> {item.label} {item.is_done ? <i class="text-success far fa-check-circle"></i> : <i class="text-danger fas fa-times-circle"></i>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CreateUser;
