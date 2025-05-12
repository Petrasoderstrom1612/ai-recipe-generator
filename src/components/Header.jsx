import React from 'react'
import ChefLogo from '../assets/chef-logo.png'

const Header = () => {
  return (
    <div className="header">
      <img src={ChefLogo} alt="chef logo"/><h1>Recipe generator</h1>
    </div>
  )
}

export default Header
