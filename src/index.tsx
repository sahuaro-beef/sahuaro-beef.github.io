import React, { StrictMode } from "react"
import ReactDOM from "react-dom"

import "./index.css"
import App from "./App"

const DOM_NODE = document.getElementById("app")

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  DOM_NODE
)
