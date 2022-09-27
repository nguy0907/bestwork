import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDqfRk92BWSCoTzxubuzIo5gA71_dVkKfQ",
    authDomain: "contactbook-dbba4.firebaseapp.com",
    projectId: "contactbook-dbba4",
    storageBucket: "contactbook-dbba4.appspot.com",
    messagingSenderId: "781249166621",
    appId: "1:781249166621:web:0ac8e145bad34b440fb5f4"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db