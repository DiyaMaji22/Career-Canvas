import { useState } from 'react'
import Body from "./Body.jsx"
import Nav from "./Nav.jsx"
function App() {
const [counter, setCounter] = useState(0);
  return (
    <>
      <div className='w-full min-h-screen'>
      <Nav />
      <Body />
      </div>
    </>
  )
}

export default App
