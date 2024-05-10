import React from "react";

//include images into your bundle
import naughtyDevil from "../../img/Naughty_Devil.png";
import { TodoList } from "/workspaces/Porduna_Todos_List_React/src/js/component/TodoList.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<TodoList />
			<p>
				<img src={naughtyDevil} width={380} />
			</p>
			<a href="#" className="btn btn-danger">
				Press to crack it all!!
			</a>
			<p>Made by <b>Porduna</b></p>
		</div>
	);
};

export default Home;
