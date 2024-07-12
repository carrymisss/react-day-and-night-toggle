import React, { useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'

import logo from './assets/logo.svg'

import './index.css'

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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </a>
      </header>
    </div>
  )
}

export default App
