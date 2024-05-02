import React from "react";
import CreateUser from "./CreateUser";
import { AddTask } from "./AddTask";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<CreateUser/>
			<AddTask/>
		</div>
	);
};

export default Home;
