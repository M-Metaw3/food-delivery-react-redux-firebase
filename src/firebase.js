import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import "firebase/compat/firestore"
import "firebase/compat/storage"



const app = firebase.initializeApp({

    apiKey: "AIzaSyCP-kLdI0fLOKlZby07KCDbik7xGndUeuU",
    authDomain: "fooddelivery-3e4f6.firebaseapp.com",
    projectId: "fooddelivery-3e4f6",
    storageBucket: "fooddelivery-3e4f6.appspot.com",
    messagingSenderId: "50561529053",
    appId: "1:50561529053:web:9cc1310079c539cb7f9734",
    measurementId: "G-3L5H837SWH"

})

export const auth = app.auth()
export const fire = app.firestore()
export const store = app.storage()


export default app