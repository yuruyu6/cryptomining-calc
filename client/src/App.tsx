import React from 'react'
import { Dashboard } from './components/Dashboard'

export const App: React.FC = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="md:container mx-auto p-4 relative top-8 md:top-20">              
        <Dashboard />
        
      </div>
    </div>
  )
}
