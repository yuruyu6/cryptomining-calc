import React from 'react'
import { Dashboard } from './components/dashboard/Dashboard'
import { RewardsHistoryTable } from './components/rewardsHistory/RewardsHistoryTable'

export const App: React.FC = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="md:container mx-auto p-4 top-8 md:top-20">
        <Dashboard />
        <RewardsHistoryTable />
      </div>
    </div>
  )
}
