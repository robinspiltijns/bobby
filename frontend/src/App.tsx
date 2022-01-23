import React, {useState} from 'react';
import './App.css';
import Firebase from "./firebase/firebase";
import {set, ref} from 'firebase/database'

function App() {
  const firebase = new Firebase()
  const [idea, setidea] = useState("")
  const submit = () => {
    set(ref(firebase.getDb(), 'ideas/'), {
      idea
    }).then(() => console.log("successful!"));
  }

  return (
    <div className="App">
      <h1>Bobby.</h1>
      <input onChange={(e => setidea(e.target.value))}/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
