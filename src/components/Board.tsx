import React from "react"
import Task from "./Task"
import "../styles/Board.css"

const Board: React.FC = () => {
	return (
		<div className="board-container" >
			<div className="board-header">
				<span className="board-title" contentEditable={true} >To Do</span>
				<button className="header-option-button">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
				</button>
			</div>
			<div className="tasks-list">
				<Task />
				<Task />
			</div>
			{/* <button className="add-card-button">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add New Card
			</button> */}
			<form className="add-card-form">
				<input autoComplete="off" name="body" className="new-card-input" contentEditable={true} placeholder="Enter some text for this card..."></input>
				<button className="new-card-button">Add Card</button>
			</form>
		</div>
	)
}

export default Board