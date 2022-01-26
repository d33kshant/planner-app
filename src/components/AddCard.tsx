import { useEffect, useRef } from "react";
import "../styles/AddCard.css"

type Props = {
	onAction: Function,
}

const AddCard: React.FC<Props> = ({ onAction })=>{

	const inputRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		inputRef.current?.focus()
	}, []);

	return (
		<form className="add-card-form">
			<span onBlur={(event)=>onAction(event)} ref={inputRef} className="new-card-input" contentEditable={true} placeholder="Enter some text for this card..."></span>
			{/* <button className="new-card-button">Add Card</button> */}
		</form>
	)
}

export default AddCard