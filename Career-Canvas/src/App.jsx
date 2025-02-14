import { useState } from 'react'

import Nav from './Nav.jsx'

function App() {
const [counter, setCounter] = useState(0);
  return (
    <>
      <div className='w-full min-h-screen'>
      <Nav />

      </div>
    </>
  )
}

export default App
