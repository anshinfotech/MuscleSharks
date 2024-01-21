import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { myStore } from './components/redux/store/store.js'
import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyDn8UXIcjNBVVYq-vvgb6zP4qnJHnZKtKc",
  authDomain: "muscleshark-a284f.firebaseapp.com",
  projectId: "muscleshark-a284f",
  storageBucket: "muscleshark-a284f.appspot.com",
  messagingSenderId: "20469451349",
  appId: "1:20469451349:web:423fdbeae95d1de7eee2dc",
  measurementId: "G-5QCPH8RQ8K"
};
firebase.initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={myStore}>
    <App />
  </Provider>
  // </React.StrictMode>,

  
)
