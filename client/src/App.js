import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState(null)

  const handleClick = async()=>{
    await axios.post("http://localhost:8080/chat", {prompt}).then(res=>{
      setResponse(res.data)
    }).catch(err=>console.log(err));
  }  
  return (
    <div>
      <h1 className='h1'>TalkAI</h1>
      <p className='p1'>Your AI powered chatbot platform</p>
    <div className='container'>
      <div className='box'>
        <div className='searchBox'>
          <input type="text" placeholder='Ask anything to AI...' 
          onChange={(e)=>setPrompt(e.target.value)} 
          value = {prompt}
          />
          <button onClick={handleClick}>Ask AI</button>
        </div>
        
        {response && (
          <div className='contentBox'> 
          <p>{response}</p>
        </div>
        )}
        

      </div>
    </div>
    </div>
  )
}

export default App