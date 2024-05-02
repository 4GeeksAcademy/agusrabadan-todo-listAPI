import React, {useState} from "react";

export const AddTask = () => {

     const [task,setTask] = useState("");
    const host = "https://playground.4geeks.com/todo";

    
    
    const newTask = {
            label: "Bajar al perro",
            is_done: false
    }
         
    

    const addTask = async (dataToSend) => {
        const uri = host + "/todos/Agus";
        const options= {
            method: "POST",
            body: JSON.stringify(dataToSend)
            
            }

        const response = await fetch(uri,options);
        if(!response.ok){
            console.log("error",response.status);
            return
        }
        const data = await response.json();
            setTask([data,...task]);
             
    }

    return(
        <div>
        
        <button onClick={()=>addTask(newTask)} className="btn btn-success">Add Task</button>  
        
        </div>
    )
}