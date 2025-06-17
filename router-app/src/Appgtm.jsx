import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import { Homes } from './Homes.jsx';
import  Featuregym  from './Pages/Featuregym.jsx';
import  Contact  from './Pages/Contact.jsx';
import  About  from './Pages/About.jsx';
import Layoutgym from './Component/Layoutgym.jsx';
import Homegym from './Pages/Homegym.jsx';
import Offergym from './Pages/Offergym.jsx';


function App()  {
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Layoutgym />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
         {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/feature',
        element: < Featuregym/>,
      },
        {
        path: '/offer',
        element: < Offergym/>,
      },
      {
        path: '/',
        element: < Homegym/>,
      },
    ],
  },
]);
return (
  <div>
    <RouterProvider router={router} />
  </div>
)
}
export default App;


