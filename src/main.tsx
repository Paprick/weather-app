import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from '@routes/routes'
import { GlobalStyles } from '@styles/index'
import '@config/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback={'loading'}>
      <GlobalStyles />
      <Routes />
    </React.Suspense>
  </React.StrictMode>
)
