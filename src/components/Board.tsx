import React, { useRef, useState } from "react"
import Task from "./Task"
import "../styles/Board.css"
import AddCard from "./AddCard"
import { Droppable } from "react-beautiful-dnd"

type Props = {
	title: string
}

const Board: React.FC<Props> = ({ title }) => {

	const [boardTitle, setBoardTitle] = useState<string>(title);
	const [isAddingTask, setIsAddingtask] = useState<boolean>(false);

	const [tasks, setTasks] = useState<string[]>([]);

	const inputRef = useRef<HTMLInputElement>(null)

	const onBoardTitleEdited: Function = (event: React.FocusEvent<HTMLSpanElement>) => {
		const newTitle = event.currentTarget.innerText
		if (newTitle) setBoardTitle(newTitle)
		else setBoardTitle(title)
	}

	const onAddCardClicked: Function = (event: React.MouseEvent<HTMLButtonElement>) => {
		setIsAddingtask(true)
		inputRef.current?.focus()
	}

	const onAddingTaskFinish: Function = (event: React.FocusEvent<HTMLSpanElement>) => {
		const newTask = event.currentTarget.innerText
		if (newTask) setTasks(prev => [...prev, newTask])
		setIsAddingtask(false)
	}

	return (
		<div className="board-container" >
			<div className="board-header">
				<span className="board-title" contentEditable={true} suppressContentEditableWarning={true} onBlur={(event) => onBoardTitleEdited(event)} >{boardTitle}</span>
				<button className="header-option-button">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
				</button>
			</div>
			<Droppable droppableId="title">
				{(provided) =>
				<div className="tasks-list" ref={provided.innerRef} {...provided.droppableProps}>
					{tasks.map((task, index) => <Task draggableId={index} key={index} value={task} />)}
					{provided.placeholder}
					<div></div>
				</div>}
			</Droppable>
			{isAddingTask && <AddCard onAction={onAddingTaskFinish} />}
			<button className="add-card-button" onClick={(event) => onAddCardClicked(event)}>
				{isAddingTask ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>}
				{isAddingTask ? "Cancel" : "Add a card"}
			</button>
		</div>
	)
}

export default Board