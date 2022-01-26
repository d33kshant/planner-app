import React from 'react'
import AppBar from './components/AppBar'
import Board from './components/Board'
import './styles/App.css'

const App: React.FC = () => {
  
  return (
    <>
    <AppBar />
    <div className="boards-container">
      <Board title="To Do"/>
      <Board title="Doing"/>
      <Board title="Done"/>
    </div>
    </>
  )
}

export default App
