import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { myStore } from './components/redux/store/store.js'
import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyCndOajoxM0k-Hb-MG0w6wUJ8tYCgD5om8",
  authDomain: "musclesharks.firebaseapp.com",
  projectId: "musclesharks",
  storageBucket: "musclesharks.appspot.com",
  messagingSenderId: "635913162489",
  appId: "1:635913162489:web:5154614b32d2b650599c28",
  measurementId: "G-M970STC73C"
};
firebase.initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={myStore}>
    <App />
  </Provider>
  // </React.StrictMode>,

  
)
