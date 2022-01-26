import React from "react"
import "../styles/Task.css"

const Task: React.FC = () => {
	return (
		<div className="task-container">
			<button className="task-edit-button">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
			</button>
			<div className="labels-list">
				<div className="label-card label-green"></div>
				<div className="label-card label-blue"></div>
			</div>
			<span className="task-body">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum libero tempora obcaecati asperiores repellendus repudiandae.
			</span>
		</div>
	)
}

export default Task