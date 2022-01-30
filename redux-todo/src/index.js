import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./components/App"
import store from "./store"
import './global.css'

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
document.getElementById("root"))