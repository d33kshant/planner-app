import React, { useState } from "react"
import "../styles/Task.css"

type Props = {
	value: string,
}

const Task: React.FC<Props> = ({ value }) => {

	const [taskBody, setTaskBody] = useState<string>(value);

	const onSpanBlur: Function = (event: React.FocusEvent<HTMLSpanElement>) => {
		const text = event.currentTarget.innerText
		if(text) setTaskBody(text)
		else setTaskBody(taskBody)
	}

	return (
		<div className="task-container">
			{/* <div className="labels-list">
				<div className="label-card label-green"></div>
				<div className="label-card label-blue"></div>
			</div> */}
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
	)
}

export default Task