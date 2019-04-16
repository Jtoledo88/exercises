import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			todos: [
				{ done: false, title: "Make the bed", id: Math.random() * 10 },
				{ done: false, title: "Wash my hands", id: Math.random() * 10 },
				{ done: false, title: "Eat", id: Math.random() * 10 },
				{ done: false, title: "Walk the dog", id: Math.random() * 10 }
			],
			taskInput: ""
		};
	}

	FormSubmit(e) {
		e.preventDefault();
		this.setState({
			todos: this.state.todos.concat([
				{
					title: this.state.taskInput,
					done: false,
					id: Math.random() * 10
				}
			])
		});
		return false;
	}

	deleteTask(taskId) {
		this.setState({
			todos: this.state.todos.filter(task => task.id != taskId)
		});
	}

	render() {
		let tasks = this.state.todos.map(task => {
			return (
				<li key={task.id}>
					<div className="task">
						<label>{task.title}</label>
						<button
							className="destroy"
							onClick={() => this.deleteTask(task.id)}
						/>
					</div>
				</li>
			);
		});
		return (
			<div className="text-center mt-5" id="to-do">
				<header className="header">
					<h1 className="title">todos</h1>
					<form onSubmit={this.FormSubmit.bind(this)}>
						<input
							autoFocus={true}
							className="new-todo"
							placeholder="What needs to be done?"
							value={this.state.taskInput}
							onChange={evt =>
								this.setState({ taskInput: evt.target.value })
							}
						/>
					</form>
				</header>
				<body className="main">
					<ul className="list">{tasks}</ul>
				</body>
				<footer className="footer">
					<span className="contador">
						<strong>
							{this.state.todos.filter(key => !key.done).length}
						</strong>
					</span>{" "}
					item left
					<p>Made by Jonathan Toledo, with love!</p>
				</footer>
			</div>
		);
	}
}
