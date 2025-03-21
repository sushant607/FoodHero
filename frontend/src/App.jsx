import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FaceRecognition from './components/FaceRecognition';
import Chatbot  from './components/ChatBot';
import ConfirmButtons from './components/TestOrderConfirm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <FaceRecognition />
      <Chatbot/>
      {/* <FaceRecognition /> */}
      <ConfirmButtons transactionId="67dd9d68d2867db3f7559abe" serverUserId="67dd9d21d2867db3f7559abd" receiverUserId="67dd9c2fd2867db3f7559abc" />
      </div>
     
    </>
  )
}

export default App
