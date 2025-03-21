import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FaceRecognition from './components/FaceRecognition';
import ConfirmButton from './components/TestOrderConfirm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      {/* <FaceRecognition /> */}
      <ConfirmButton/>
      </div>
     
    </>
  )
}

export default App
