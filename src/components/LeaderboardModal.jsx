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

const LeaderboardModal = ({ type, isOpen, onClose, data }) => {
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
        <div className="flex justify-between items-center mb-6">
          <h3 className={`text-2xl font-bold text-gray-800`}>
            <FontAwesomeIcon icon={getIcon()} className={`mr-3 ${getIconColor()}`} />
            {data.title}
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 text-2xl transition-colors"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        <div className="space-y-4">
          {data.entries.map((entry, index) => (
            <div 
              key={index}
              className={`flex items-center justify-between p-4 rounded-2xl border ${getGradientClass(entry.rank)}`}
            >
              <div className="flex items-center">
                <div className={`w-12 h-12 ${getAvatarGradient(entry.rank)} rounded-full flex items-center justify-center text-white font-bold mr-4 text-lg`}>
                  {entry.avatar}
                </div>
                <div>
                  <div className="font-bold text-lg">{entry.name}</div>
                  <div className="text-sm text-gray-600">#{entry.rank} {entry.description}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-2xl text-gray-800">{entry.value}</div>
                <div className={`text-sm font-semibold ${entry.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  <FontAwesomeIcon 
                    icon={entry.isPositive ? faArrowUp : faArrowDown} 
                    className="mr-1" 
                  />
                  {entry.isPositive ? '+' : ''}{entry.change}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeaderboardModal 