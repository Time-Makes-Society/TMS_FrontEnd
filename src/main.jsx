<<<<<<< Updated upstream
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
=======
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import store from "./store/index.js"
import { Provider } from "react-redux"
import { register } from "./service-worker"
// import {PersistGate} from 'redux-persist/integration/react';
// import {persistStore} from 'redux-persist';

//export let persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate> */}
      <App />
    </Provider>
  </React.StrictMode>
>>>>>>> Stashed changes
)

register()
