import { useState } from 'react'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'


function App() {

  return (
    <section>
      <Header/>
      <main>
        <NewTask/>
        <Tasks/>
      </main>
    </section>
  )
}

export default App
