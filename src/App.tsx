import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Service from './pages/Service/Service'

const App: React.FC  = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/service' element={<Service />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App