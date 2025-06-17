 //import React from 'react';
 import ReactDOM from 'react-dom/client';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import './index.css';

// //import { Homes } from './Homes.jsx';
// import  Todo  from './Pages/Todo.jsx';
// import  Contact  from './Pages/Contact.jsx';
// import  About  from './Pages/About.jsx';
// import Layout from './Component/Layout.jsx';
// import Home from './Pages/Home.jsx';

// function App()  {
//  const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: 'about',
//         element: <About />,
//       },
//          {
//         path: 'contact',
//         element: <Contact />,
//       },
//       {
//         path: 'todo',
//         element: <Todo />,
//       },
//         {
//         path: '/',
//         element: <Home />,
//       },
//     ],
//   },
// ]);
// return (
//   <div>
//     <RouterProvider router={router} />
//   </div>
// )
// }
// export default App;

import React, { useState } from 'react';
import { UserContext } from './UserContext';
import ComponentA from './Usecomponent/ComponentA';

const App = () => {
  const [user, setUser] = useState("BroCode");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <ComponentA />
      </div>
    </UserContext.Provider>
  );
};

export default App;
