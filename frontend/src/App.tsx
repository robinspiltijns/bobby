import React, {useState} from 'react';
import './App.css';
import {getFirestore, doc, setDoc} from 'firebase/firestore'

function App() {
  const db = getFirestore()
  const [idea, setidea] = useState("")
  return (
    <div className="App">
      <h1>Bobby.</h1>
      <input onChange={(e => setidea(e.target.value))}/>
      <button>Submit</button>
    </div>
  );
}

export default App;
