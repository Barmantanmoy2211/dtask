import React from 'react'
import "./app.scss"
import {Home, Navbar, DashboardPreview} from "./Components"

const app = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <DashboardPreview />
    </div>
  )
}

export default app
