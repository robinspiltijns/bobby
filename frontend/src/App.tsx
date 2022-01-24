import React, {useState} from 'react';
import './App.css';
import Firebase from "./firebase/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore"; 


function App() {
  const firebase = new Firebase()
  const db = firebase.getDb()
  const [newIdea, setNewIdea] = useState("")
  const [ideas, setIdeas] = useState<string[]>([])

  const submit = async () => {
    const docRef = await addDoc(collection(db, "ideas"), {
      idea: newIdea
    });
    console.log(docRef);
  }
  const onRefresh = async () => {
    const querySnapshot = await getDocs(collection(db, "ideas"));
    setIdeas(querySnapshot.docs.map(doc => JSON.stringify(doc.data())))
  }

  return (
    <div className="App">
      <h1>Bobby.</h1>
      <h2>Enter an idea</h2>
      <input onChange={(e => setNewIdea(e.target.value))}/>
      <button onClick={submit}>Submit</button>

      <h2>Ideas</h2>
      <button onClick={onRefresh}>Refresh ideas</button>
      <ul>
        {ideas.map((i) => <li>{i}</li>)}
      </ul>
    </div>
  );
}

export default App;
