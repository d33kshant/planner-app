import React from 'react'
import AppBar from './components/AppBar'
import Board from './components/Board'
import { DragDropContext } from 'react-beautiful-dnd'
import './styles/App.css'

const App: React.FC = () => {
  
  return (
    <>
    <AppBar />
    <DragDropContext onDragEnd={() => {}}>
      <div className="boards-container">
        <Board title="To Do"/>
        <Board title="Doing"/>
        <Board title="Done"/>
      </div>
    </DragDropContext>
    </>
  )
}

export default App
