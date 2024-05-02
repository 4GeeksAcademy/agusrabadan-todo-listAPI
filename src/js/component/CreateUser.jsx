import React, { useEffect, useState } from "react";

const CreateUser = () => {

    const [user,setUser] = useState("");
    const host = "https://playground.4geeks.com/todo";

    const createUser = async () => {
        const uri = host + "/users/Agus";
        const options={
            method: "POST",

        }
        const response = await fetch(uri,options);
        if(!response.ok){
            console.log("error",response.status);
            return
        }
        const data = await response.json();
            setUser(data);
            
    }

    useEffect(()=>{
        createUser();
    },[])

    return(
        <div className="container text-center">
            <h1> Todo User: Agus</h1>
        </div>
    )
}

export default CreateUser;