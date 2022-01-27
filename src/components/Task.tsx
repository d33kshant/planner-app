import React, { useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import "../styles/Task.css"
import { TaskProps } from "../types/Props"

const Task: React.FC<TaskProps> = ({ value, draggableId, draggableIndex, labels }) => {

	const [taskBody, setTaskBody] = useState<string>(value);

	const onSpanBlur: Function = (event: React.FocusEvent<HTMLSpanElement>) => {
		const text = event.currentTarget.innerText
		if(text) setTaskBody(text)
		else setTaskBody(taskBody)
	}

	return (
		<Draggable draggableId={draggableId.toString()} index={draggableIndex}>
			{(provided)=>(
				<div className="task-container" ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
					{ labels.length > 0 && <div className="labels-list">
						{labels.map((label, index)=><div key={index} className={`label-card label-${label}`}></div>)}
					</div>}
					<span 
						className="task-body"
						contentEditable={true}
						suppressContentEditableWarning={true}
						onBlur={(event)=>{
							onSpanBlur(event)
						}}
						defaultValue={taskBody}
					>
						{taskBody}
					</span>
				</div>
			)}
		</Draggable>
	)
}

export default Task