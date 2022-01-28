import React, { useState } from 'react'
import AppBar from './components/AppBar'
import Board from './components/Board'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import './styles/App.css'
import BoardItem from './types/BoardItem'

const App: React.FC = () => {

	const [boards, setBoards] = useState<BoardItem[]>([]);

	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result

		if( !destination || (destination.droppableId === source.droppableId && destination.index === source.index ) ){
			return
		}

		console.log(result)
	}
	
	const addNewBoard = () => {
		setBoards([...boards, { title: "", id: boards.length }])
	}

	return (
		<>
			<AppBar />
			<DragDropContext onDragEnd={onDragEnd}>
				<div className="boards-container">
					{ boards.map(board=><Board key={board.id} droppableId={board.id} title={board.title} />) }
					<button className="add-new-board" onClick={addNewBoard} >
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
						Add new board
					</button>
				</div>
			</DragDropContext>
		</>
	)
}

export default App
