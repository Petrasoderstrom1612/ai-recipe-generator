import React from 'react'
import ChefLogo from '../assets/chef-logo.png'

const Header = () => {
  return (
    <header className="header">
      <img src={ChefLogo} alt="chef logo"/><h1 className="header-headline">Recipe generator</h1>
    </header>
  )
}

export default Header
