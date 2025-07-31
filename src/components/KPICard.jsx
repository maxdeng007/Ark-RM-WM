import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faArrowUp, 
  faArrowDown, 
  faTrophy, 
  faExclamationTriangle, 
  faStar, 
  faUsers,
  faChartBar
} from '@fortawesome/free-solid-svg-icons'
import Chart from './Chart'

const KPICard = ({ type, data, onShowLeaderboard }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const getGradientClass = () => {
    switch(type) {
      case 'revenue': return 'card-gradient-1'
      case 'investment': return 'card-gradient-2'
      case 'customers': return 'card-gradient-3'
      default: return 'card-gradient-1'
    }
  }

  const getIcon = () => {
    switch(type) {
      case 'revenue': return faTrophy
      case 'investment': return faExclamationTriangle
      case 'customers': return faStar
      default: return faTrophy
    }
  }

  const getTrophyIcon = (trophyType) => {
    switch(trophyType) {
      case 'gold': return '🥇'
      case 'silver': return '🥈'
      case 'bronze': return '🥉'
      default: return '🏆'
    }
  }

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className={`flip-card-front ${getGradientClass()} text-white`}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-2xl font-bold mb-1">{data.title}</h3>
              <p className="text-white/70 text-sm">本周表现</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold mb-1">{data.currentValue}</div>
              <div className={`flex items-center text-sm ${data.isPositive ? 'text-green-300' : 'text-red-300'}`}>
                <FontAwesomeIcon 
                  icon={data.isPositive ? faArrowUp : faArrowDown} 
                  className="mr-1" 
                />
                {data.isPositive ? '+' : ''}{data.growthRate}%
              </div>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/80">
                {type === 'revenue' ? '年度目标进度' : '下半年目标进度'}
              </span>
              <span className="font-semibold">{data.targetProgress}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill bg-white/30" 
                style={{ width: `${data.targetProgress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="stat-card mb-3">
            <p className="text-white/90 text-sm leading-relaxed">
              <FontAwesomeIcon icon={getIcon()} className="mr-2 text-yellow-300" />
              {data.evaluation}
            </p>
          </div>
          
          {type !== 'customers' && (
            <div className="chart-container flex-1 flex items-center justify-center">
              <Chart data={data.chartData} type={type} />
            </div>
          )}
          
          {type === 'customers' && (
            <div className="mb-3">
              <h4 className="font-semibold text-white mb-2">
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                即将达成客户
              </h4>
              <div className="space-y-2">
                {data.upcomingCustomers.map((customer, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white/90 text-sm">{customer.name}</span>
                    <span className="customer-tag text-white/80">差距{customer.gap}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="text-center mt-2">
            <p className="text-white/60 text-xs">点击卡片查看排名详情</p>
          </div>
        </div>
        
        {/* Back Side */}
        <div className={`flip-card-back ${getGradientClass()} text-white`}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold">
              {type === 'revenue' ? '年度排名' : '下半年排名'}
            </h3>
            <div className="text-right">
              <div className="flex items-center mb-2">
                <span className="trophy text-3xl">{getTrophyIcon(data.ranking.trophy)}</span>
                <span className="text-4xl font-bold ml-2">#{data.ranking.position}</span>
              </div>
              <div className={`text-sm ${data.ranking.change >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                <FontAwesomeIcon 
                  icon={data.ranking.change >= 0 ? faArrowUp : faArrowDown} 
                  className="mr-1" 
                />
                {data.ranking.change >= 0 ? '+' : ''}{data.ranking.change}
              </div>
            </div>
          </div>
          
          <div className="stat-card mb-3">
            <p className="text-white/90 text-sm">
              {type === 'revenue' && '当前排名第一，较上周无变化，表现稳定优秀！'}
              {type === 'investment' && `下半年累计海投: ${data.ranking.totalValue}，排名略有下降，需要加强！`}
              {type === 'customers' && `下半年累计黄金新客: ${data.ranking.totalValue}，排名上升，继续保持！`}
            </p>
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation()
              onShowLeaderboard()
            }} 
            className="btn-modern w-full mb-3"
          >
            <FontAwesomeIcon icon={faChartBar} className="mr-2" />
            {type === 'revenue' && '年度创收榜'}
            {type === 'investment' && '下半年海投榜'}
            {type === 'customers' && '下半年黄金新客榜'}
          </button>
          
          <div className="text-center">
            <p className="text-white/60 text-xs">点击卡片返回正面</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KPICard 