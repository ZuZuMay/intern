import { useState } from 'react'
import './App.css'
 import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './Signup.jsx'
import Home from './Home.jsx'
import Login from './login.jsx'

function App() {
  const router=createBrowserRouter(
    [{
      path:'/',
      element:<Signup/>,
    },
    {
          path:'/login',
          element:<Login/>
    },
    {
             path:'/Home',
          element:<Home/>
     }
      
    ]
  )

  return (
    <>
     <RouterProvider router={router}
     future={{
    v7_startTransition: true,
  }} />
    </>
  )
}

export default App

