import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardHome from './Components/Pages/Dashboard/DashboardHome'
import LayOut from './DashboardLayOut/LayOut'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
       <LayOut></LayOut>
      </div>
      

  )
}

export default App
