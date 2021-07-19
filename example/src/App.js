import React, { useState } from 'react'
import './App.css'
import logo from './logo.svg'
import DayNightToggle from 'react-day-and-night-toggle'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('data-theme') === 'dark' ? true : false)

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'light'

    setIsDarkMode(newColorScheme === 'dark' ? true : false)
    localStorage.setItem('data-theme', newColorScheme)
    document.body.setAttribute('data-theme', localStorage.getItem('data-theme'))
  })

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode)
    if(!isDarkMode) {
      localStorage.setItem('data-theme', 'dark')
      document.body.setAttribute('data-theme', 'dark')
    } else {
      localStorage.setItem('data-theme', 'light')
      document.body.setAttribute('data-theme', 'light')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DayNightToggle size={100} onChange={handleChangeTheme} checked={isDarkMode} />
        <p></p>
        <a className="App-link" href="https://github.com/carrymisss/react-day-and-night-toggle" target="_blank" rel="noopener noreferrer">
          <img width="35px" src="https://camo.githubusercontent.com/5fca3db52c463447c36cbf864b01eac247219e56ce24dc0169a66c62ae53a481/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6475334a336358797a686a3735494f6776412f67697068792e676966" alt="" />
        </a>
      </header>
    </div>
  )
}

export default App
