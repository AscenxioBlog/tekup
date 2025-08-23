import React from 'react'
import logo from '../assets/logo-dark.png'

function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-main transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-main transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-main transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-main transition-colors">Portfolio</a>
            <a href="#team" className="text-gray-700 hover:text-main transition-colors">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-main transition-colors">Contact</a>
          </nav>
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header