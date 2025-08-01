import React, { useEffect, useRef } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { useTheme } from '../context/ThemeContext'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const Chart = ({ data, type }) => {
  const { isDark } = useTheme()
  
  // Define specific dates for each type
  const getWeekLabels = () => {
    switch(type) {
      case 'revenue': 
        return ['08/21', '08/28', '09/04', '09/11', '09/18', '09/25', '10/02', '10/09']
      case 'investment': 
        return ['06/21', '06/28', '07/05', '07/12', '07/19', '07/26', '08/02', '08/09']
      default: 
        return ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8']
    }
  }
  
  const weeks = getWeekLabels()
  
  const getChartColors = () => {
    if (isDark) {
      // Dark theme: Use white colors like progress bars
      switch(type) {
        case 'revenue': return { border: 'rgba(255, 255, 255, 0.8)', background: 'rgba(255, 255, 255, 0.1)', point: 'rgba(255, 255, 255, 0.9)' }
        case 'investment': return { border: 'rgba(255, 255, 255, 0.8)', background: 'rgba(255, 255, 255, 0.1)', point: 'rgba(255, 255, 255, 0.9)' }
        case 'customers': return { border: 'rgba(255, 255, 255, 0.8)', background: 'rgba(255, 255, 255, 0.1)', point: 'rgba(255, 255, 255, 0.9)' }
        default: return { border: 'rgba(255, 255, 255, 0.8)', background: 'rgba(255, 255, 255, 0.1)', point: 'rgba(255, 255, 255, 0.9)' }
      }
    } else {
      // Light theme: Use gradient colors
      switch(type) {
        case 'revenue': return { border: '#667eea', background: 'rgba(102, 126, 234, 0.15)', point: '#667eea' }
        case 'investment': return { border: '#4facfe', background: 'rgba(79, 172, 254, 0.15)', point: '#4facfe' }
        case 'customers': return { border: '#fa709a', background: 'rgba(250, 112, 154, 0.15)', point: '#fa709a' }
        default: return { border: '#667eea', background: 'rgba(102, 126, 234, 0.15)', point: '#667eea' }
      }
    }
  }

  const colors = getChartColors()
  
  const chartData = {
    labels: weeks,
    datasets: [{
      label: type === 'revenue' ? '周增创收(¥元)' : '周增海投($元)',
      data: data,
      borderColor: colors.border,
      backgroundColor: colors.background,
      tension: 0.4,
      fill: true,
      borderWidth: 3,
      pointBackgroundColor: colors.point,
      pointBorderColor: colors.point,
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: type === 'revenue' ? '周增创收(¥元)' : '周增海投($元)',
          color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
          font: {
            size: 12,
            weight: 'bold'
          }
        },
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
          padding: 8
        }
      },
      x: {
        title: {
          display: false
        },
        grid: {
          display: false
        },
        ticks: {
          color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
          padding: 8
        }
      }
    }
  }

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  )
}

export default Chart 