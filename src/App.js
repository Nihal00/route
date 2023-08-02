import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./componenets/Home";
import Blog from "./componenets/Blog";
import Contact from "./componenets/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>


        <Routes>
          <Route exact path='/'element={<Home />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
