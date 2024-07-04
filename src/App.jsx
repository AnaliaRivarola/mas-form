import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './Components/Form'
import Results from './Components/Results'
import './App.css'

function App() {
  const [state, setState] = useState({
    fistName: "",
    lastName: "",
    password: "",
    cpassword: ""
  });

  return (
    <>
      <div className='App'>
        <Form inputs={state} setInputs={setState} />
        <Results data={state} />
       </div>
    </>
  )
}

export default App
