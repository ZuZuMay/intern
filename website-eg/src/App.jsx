import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './Page/About.jsx'
import Service from './Page/Service.jsx'
import Product from './Page/Product.jsx'
import Test from './Page/Test.jsx'
import Home from './Page/Home.jsx'
import Layout from './Component/Layout.jsx';
function App() {
  const router=createBrowserRouter(
    [{
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/service',
          element:<Service/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/product',
          element:<Product/>
        },
        {
          path:'/test',
          element:<Test/>
        },
        {
        path: '/',
        element: <Home />,
      },
      ],
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

