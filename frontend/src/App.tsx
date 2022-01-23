import React from 'react';
import './App.css';
import Firebase from "./firebase/firebase";
import {set, ref} from 'firebase/database'

function App() {
  const firebase = new Firebase()
  const onClick = () => {
    set(ref(firebase.getDb(), 'users/'), {
      user: "Robin"
    }).then(() => console.log("succesful!"));
  }

  return (
    <div className="App">
      <button onClick={onClick}>Add document</button>
    </div>
  );
}

export default App;
