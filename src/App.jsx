import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {

  return (
    <>
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
   <Navbar />
   <Sidebar />
    </div>
 
    </>
  )
}

export default App
