import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  Usuario  from './Usuario.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <main className="h-screen light text-foreground bg-background">
        {/* <App /> */}
        <Usuario />
      </main>

  </React.StrictMode>,
)
