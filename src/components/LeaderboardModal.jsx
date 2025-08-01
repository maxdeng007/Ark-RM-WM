import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTimes, 
  faTrophy, 
  faGlobe, 
  faCrown,
  faArrowUp,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../context/ThemeContext'

const LeaderboardModal = ({ type, isOpen, onClose, data }) => {
  const { isDark } = useTheme()
  if (!isOpen || !data) return null

  const getIcon = () => {
    switch(data.icon) {
      case 'trophy': return faTrophy
      case 'globe': return faGlobe
      case 'crown': return faCrown
      default: return faTrophy
    }
  }

  const getIconColor = () => {
    switch(data.icon) {
      case 'trophy': return 'text-yellow-500'
      case 'globe': return 'text-blue-500'
      case 'crown': return 'text-purple-500'
      default: return 'text-yellow-500'
    }
  }

  const getGradientClass = (rank) => {
    switch(rank) {
      case 1: return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200'
      case 2: return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200'
      case 3: return 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200'
      default: return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200'
    }
  }

  const getAvatarGradient = (rank) => {
    switch(rank) {
      case 1: return 'bg-gradient-to-br from-yellow-400 to-yellow-500'
      case 2: return 'bg-gradient-to-br from-gray-400 to-gray-500'
      case 3: return 'bg-gradient-to-br from-orange-400 to-orange-500'
      default: return 'bg-gradient-to-br from-gray-400 to-gray-500'
    }
  }

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-8">
          <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            <FontAwesomeIcon icon={getIcon()} className={`mr-3 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
            {data.title}
          </h3>
          <button 
            onClick={onClose} 
            className={`text-2xl transition-colors ${isDark ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        <div className="space-y-4">
          {data.entries.map((entry, index) => {
            // Calculate progress percentage based on revenue value
            const revenueValue = parseFloat(entry.value.replace(/[¥,M]/g, ''));
            const maxRevenue = Math.max(...data.entries.map(e => parseFloat(e.value.replace(/[¥,M]/g, ''))));
            const progressPercentage = (revenueValue / maxRevenue) * 100;
            
            return (
              <div key={index} className={`flex items-center w-full space-x-4 md:space-x-6 ${entry.isMe ? (isDark ? 'bg-yellow-500/20 border-l-4 border-yellow-500' : 'bg-yellow-100 border-l-4 border-yellow-500') : ''} p-2 rounded-lg`}>
                {/* Ranking Number */}
                <span className={`text-lg font-bold ${index < 3 ? (isDark ? 'text-yellow-400' : 'text-yellow-600') : (isDark ? 'text-white' : 'text-gray-800')} min-w-[30px] md:min-w-[35px]`}>
                  {entry.rank}
                </span>
                
                {/* Profile Picture - Hidden on mobile */}
                <div className={`hidden md:flex w-10 h-10 rounded-full items-center justify-center text-white font-bold text-sm ${entry.isMe ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : 'bg-gradient-to-br from-blue-400 to-blue-600'}`}>
                  {entry.avatar}
                </div>
                
                {/* Name */}
                <span className={`text-sm font-medium flex-1 ${entry.isMe ? (isDark ? 'text-yellow-300' : 'text-yellow-700') : (isDark ? 'text-white' : 'text-gray-800')}`}>
                  {entry.name}
                </span>
                
                {/* Progress Bar */}
                <div className={`flex-1 rounded-full h-3 mx-3 md:mx-6 ${isDark ? 'bg-white/20' : 'bg-gray-200'}`}>
                  <div 
                    className={`h-3 rounded-full transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-orange-400 to-orange-600' : 'bg-gradient-to-r from-blue-500 to-purple-600'}`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                
                {/* Revenue Amount and Change */}
                <div className="text-right min-w-[80px] md:min-w-[120px]">
                  <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {entry.value}
                  </div>
                  <div className={`text-xs font-medium ${entry.isPositive ? (isDark ? 'text-green-400' : 'text-green-600') : (isDark ? 'text-red-400' : 'text-red-600')}`}>
                    {entry.isPositive ? '+' : ''}{entry.change}{entry.changeType === 'absolute' ? '' : '%'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default LeaderboardModal 