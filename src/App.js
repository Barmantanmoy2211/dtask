import React from 'react'
import "./app.scss"
import {Home, Navbar, DashboardPreview, Analytics, Feature, Distribution} from "./Components"

const app = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <DashboardPreview />
      <Analytics />
      <Feature />
      <Distribution />
    </div>
  )
}

export default app
