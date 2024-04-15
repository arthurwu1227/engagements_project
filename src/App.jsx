import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Navbar'
import SimpleBottomNavigation from './components/Navbar'

function App() {
  const [textBoxes, setTextBoxes] = useState({});

  const addTextbox = () => {
    const textboxObject = {
      text: ''
    }
  }

  return (
    <>
    <div className="navbar-top">
    <SimpleBottomNavigation></SimpleBottomNavigation>
    </div>    
    </>
  )
}

export default App
