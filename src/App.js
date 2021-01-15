import React from 'react'
import './App.css'
import EntryForm from './components/EntryForm'
import AddForm from './components/AddForm'
import LotConsole from './components/LotConsole'

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <h1>Automated Parking Lot</h1>
      </header>

      <div className='container'>
        <EntryForm />
        <AddForm />
        <LotConsole />
      </div>
    </div>
  )
}

export default App
