
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouterApp from './pages/RouterApp'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
    <Toaster
        containerClassName="toast"
        position="top-center"
        toastOptions={{
          duration: 3000,
          className: "custom-toast",
          style: {
            backgroundColor: "#ce1417",
            fontWeight: "600",
            borderRadius: '0px',
            padding: "16px",
            color: "white",
            maxWidth: "1000px",
          },
        }}
      />
    <BrowserRouter>
      <RouterApp/>
    </BrowserRouter>
     
    </>
  )
}

export default App
