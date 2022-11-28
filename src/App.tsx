import { useState } from 'react'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'


function App() {

  return (
    <section>
      <Header/>
      <NewTask/>
    </section>
  )
}

export default App
