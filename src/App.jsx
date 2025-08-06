import React, { useState } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Header from './components/Header'
import KPICard from './components/KPICard'
import LeaderboardModal from './components/LeaderboardModal'
import Aurora from './components/Aurora'
import DotGrid from './components/DotGrid'
import { mockData } from './data/mockData'
import { StagewiseToolbar } from '@stagewise/toolbar-react'
import ReactPlugin from '@stagewise-plugins/react'

function AppContent() {
  const [activeModal, setActiveModal] = useState(null)
  const { isDark } = useTheme()

  const showLeaderboard = (type) => {
    setActiveModal(type)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <>
      {/* Stagewise Toolbar - Only in development */}
      <StagewiseToolbar
        config={{
          plugins: [ReactPlugin]
        }}
      />
      
      {/* Background effects for different themes */}
      {isDark ? (
        <Aurora 
          colorStops={["#667eea", "#4facfe", "#fa709a"]}
          amplitude={1.0}
          blend={0.5}
          speed={1.0}
        />
      ) : (
        <DotGrid />
      )}
      
      <div className="min-h-screen p-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header Card */}
          <Header />

          {/* KPI Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <KPICard 
              type="revenue"
              data={mockData.revenue}
              onShowLeaderboard={() => showLeaderboard('revenue')}
            />
            <KPICard 
              type="investment"
              data={mockData.investment}
              onShowLeaderboard={() => showLeaderboard('investment')}
            />
            <KPICard 
              type="customers"
              data={mockData.customers}
              onShowLeaderboard={() => showLeaderboard('customers')}
            />
          </div>
        </div>

        {/* Leaderboard Modals */}
        <LeaderboardModal 
          type="revenue"
          isOpen={activeModal === 'revenue'}
          onClose={closeModal}
          data={mockData.leaderboards.revenue}
        />
        <LeaderboardModal 
          type="investment"
          isOpen={activeModal === 'investment'}
          onClose={closeModal}
          data={mockData.leaderboards.investment}
        />
        <LeaderboardModal 
          type="customers"
          isOpen={activeModal === 'customers'}
          onClose={closeModal}
          data={mockData.leaderboards.customers}
        />
      </div>


    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App 