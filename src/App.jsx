import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Body from './components/Body.jsx'
import Inbox from './components/Inbox.jsx'
import Mail from './components/Mail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Inbox />
      }, {
        path: '/mail/:id',
        element: <Mail/>
      }
    ]
  }
])

function App() {

  return (
    <>
      <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
        <Navbar />
        <RouterProvider router={router} />
      </div>

    </>
  )
}

export default App
