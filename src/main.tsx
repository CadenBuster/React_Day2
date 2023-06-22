import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ExerciseTwo from './components/ExerciseTwo.tsx'
import ExerciseOne from './components/ExerciseOne.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ExerciseOne/>
    <ExerciseTwo/>
  </React.StrictMode>,
)
