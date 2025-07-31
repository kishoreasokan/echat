import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "@/app/layout"
import Home from "@/Pages/Home"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
