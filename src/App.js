// App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Login from './Components/Login/Login'

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path='/' element={<Layout />}>
        
          <Route path='/dashboard' element={<div />} /> \
        </Route>

       
        <Route path='/login' element={<Login page='login' />} />
        <Route path='/register' element={<Login page='register' />} />
      </Routes>
    </Router>
  );
}

export default App;
