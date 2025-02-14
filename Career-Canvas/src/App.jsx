import { useState } from 'react'

import Nav from './Nav.jsx'
import Footer  from './Footer.jsx';
function App() {
const [counter, setCounter] = useState(0);
  return (
    <>
      <div className='w-full min-h-screen flex m-0 flex-col'>
      <Nav />



      </div>
    </>
  )
}

export default App
