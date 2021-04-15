import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { StateProvider } from './StateProvider'
import { initalState, reducer } from './reducer'


ReactDOM.render(
  // putting higher order component wrapped around the app to allow context to be used throught the app 
  <StateProvider initalState={initalState} reducer={reducer}>
  <App />
  </StateProvider>,

  document.getElementById('root')
)


