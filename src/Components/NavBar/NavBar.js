import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const signedInStatus = localStorage.getItem('isSignedIn') === 'true'
    setIsSignedIn(signedInStatus)
  }, [])

  const handleSignInClick = () => {
    localStorage.setItem('isSignedIn', 'true')
    setIsSignedIn(true)
    navigate('/login')
  }

  const handleSignOutClick = () => {
    localStorage.removeItem('isSignedIn')
    setIsSignedIn(false)
    navigate('/login')
  }

  return (
    <div className='navbar'>
      <img 
        className='Logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
        alt="Netflix Logo" 
      />
      <div className='nav-options'>
        <select className='language-select'>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
        {isSignedIn ? (
          <button className='sign-in-button' onClick={handleSignOutClick}>Sign Out</button>
        ) : (
          <button className='sign-in-button' onClick={handleSignInClick}>Sign In</button>
        )}
      </div>
    </div>
  )
}

export default NavBar
