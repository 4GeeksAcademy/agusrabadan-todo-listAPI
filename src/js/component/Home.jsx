import React from "react";
import CreateUser from "./CreateUser";
import { AddTask } from "./AddTask";
import { ToDoList } from "./ToDoList";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<ToDoList/>
			 {/* <AddTask/>
			 <CreateUser/>  */}
		</div>
	);
};

export default Home;
