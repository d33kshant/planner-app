import { useEffect, useRef, useState } from "react";
import "../styles/AddCard.css"

type Props = {
	onAddClicked: (body: string, labels: string[]) => void,
	onCacelCliced: () => void,
}

const AddCard: React.FC<Props> = ({ onAddClicked, onCacelCliced })=>{

	const inputRef = useRef<HTMLSpanElement>(null);
	const [labels, setLabels] = useState<string[]>([]);
	const colors: string[] = ['blue', 'green', 'red', 'orange', 'yellow']

	useEffect(() => {
		inputRef.current?.focus()
	}, []);

	const onLabelClicked = (color: string) => {
		if (labels.includes(color)) {
			setLabels(labels.filter(item=>item!==color))
		}else{
			setLabels([...labels, color])
		}
	}

	return (
		<>
			<form className="add-card-form">
				<div className="labels-list">
					{ colors.map((color, index)=><div key={index} onClick={()=>onLabelClicked(color)} className={`label-card label-${color} ${labels.includes(color) ? "label-selected" : "label-deselected"}`}></div>) }
				</div>
				<span ref={inputRef} className="new-card-input" contentEditable={true} placeholder="Enter some text for this card..."></span>
				{/* <button className="new-card-button">Add Card</button> */}
			</form>
			<div className="card-form-actions">
				<button className="form-action action-add" onClick={() => onAddClicked(inputRef.current?.innerText || "", labels)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
					Add
				</button>
				<button className="form-action action-cacel" onClick={onCacelCliced}>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
					Cancel
				</button>
			</div>
		</>
	)
}

export default AddCard