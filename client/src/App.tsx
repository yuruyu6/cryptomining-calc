import React from 'react'
import { Loader } from './components/ui/Loader'

interface Props {
  myText: string
}

export const App: React.FC<Props> = ({ myText }) => {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Loader />
    </div>
  )
}
