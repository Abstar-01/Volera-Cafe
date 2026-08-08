import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './Page/Navigation/Navigation.jsx'
import Home from './Page/Home/Home.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Home />

      
    </>
  )
}

export default App
