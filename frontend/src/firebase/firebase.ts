import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore"


const config = {
    apiKey: "AIzaSyAuP9KfbzTBHWGhD7h0xG1jy0DqlGznJh4",
    authDomain: "bobby-ac17d.firebaseapp.com",
    databaseURL: "https://bobby-ac17d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bobby-ac17d",
    storageBucket: "bobby-ac17d.appspot.com",
    messagingSenderId: "266083858239",
    appId: "1:266083858239:web:3f9a2d1517670de115058a",
    measurementId: "G-YESTFTJ2DZ"
};

class Firebase {
    constructor() {
        this.app = initializeApp(config)
        this.database = getFirestore()
    }
    private readonly app
    private readonly database

    getDb = () => this.database
}

export default Firebase
