import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="p-8 mb-8 text-center animate-float">
      <div className="relative">
        <button
          onClick={toggleTheme}
          className="floating-icon bg-gradient-to-br from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 cursor-pointer"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <FontAwesomeIcon 
            icon={isDark ? faSun : faMoon} 
            className="text-white text-xl"
          />
        </button>
        <h1 className={`text-4xl font-bold mb-3 text-shadow ${isDark ? 'text-white' : 'text-gray-800'}`}>RM一周简报</h1>
        <p className={`text-xl font-medium ${isDark ? 'text-white/80' : 'text-gray-600'}`}>6/12-6/18</p>
      </div>
    </div>
  )
}

export default Header 