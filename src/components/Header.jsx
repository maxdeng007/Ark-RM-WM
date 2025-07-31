import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="glass-card rounded-3xl p-8 mb-8 text-center animate-float">
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
        <h1 className="text-4xl font-bold text-white mb-3 text-shadow">RM一周简报</h1>
        <p className="text-xl text-white/80 font-medium">6/12/2025 - 6/18/2025</p>
        <div className="mt-4 flex justify-center items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-slow"></div>
            <span className="text-white/70 text-sm">实时数据</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse-slow"></div>
            <span className="text-white/70 text-sm">自动更新</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header 