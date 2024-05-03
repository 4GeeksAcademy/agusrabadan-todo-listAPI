import React from "react";

export const ToDoList = () => {

    const[task, setTask] = useState(" ");
    const [list, setList] = [];
    const host = "https://playground.4geeks.com/todo";
    const user = "Agus";

    const handleSubmit = (event) => {
        event.preventDefault();
        if(task.trim() ! == ""){
            setList([...list,task]);
            setTask("");
        } else{
            setTask("");
        }
    }

    const editTask = (item) =>{

    }

    const getTodos = async () =>{
        const uri = `${host}/users/${user}`
    }

    const deleteTask = async (item) => {
        const uri= `${host}/todos/${item.id}`;
        const options = {
            method: "DELETE"
        }
        const response = await fetch (uri,options);
        if(!response.ok){
            console.log("Error:")
            return
        }
        const data = await response.json;
        getTodos()
    }

    return(

    );
};