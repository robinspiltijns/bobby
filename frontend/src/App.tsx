import React, {useState} from 'react';
import './App.css';
import Firebase from "./firebase/firebase";
import { collection, addDoc } from "firebase/firestore"; 


function App() {
  const firebase = new Firebase()
  const db = firebase.getDb()
  const [idea, setidea] = useState("")
  const submit = async () => {
    const docRef = await addDoc(collection(db, "ideas"), {
      idea
    });
    console.log(docRef);
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
