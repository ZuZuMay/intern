import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
//import { Book } from './pages/Book.jsx';
//import { BookList } from './pages/BookList.jsx';
//import { Contact } from './pages/Contact.jsx';
//import { NewBook } from './pages/NewBook.jsx';
import { BorderLayout } from './BorderLayout.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { Home } from './pages/Home.jsx';
import { BookRoutes } from './BookRoutes.jsx';
import {Book} from './pages/Book.jsx'
import {Book1} from './pages/Book1.jsx'
import {Book2} from './pages/Book2.jsx'



function App() {
  // const location=useLocation()
    //console.log(location)
  return (
   
    <>
    {/*<Routes location="/Books">
      <Route path="/Books" element={<h1>Extra Content</h1>}/>
      </Routes>*/}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Book">Books</Link>
          </li>
          <li>
            <Link to="/*">NotFound</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Book" element={<BookRoutes/>} />
       <Route path="/BorderLayout" element={<BorderLayout />} /> 

         {/*//way1
         <Route element={<BooKLayout />} >
            <Route index element={<BookList />} />
           <Route path=":id" element={<Book />} />
            <Route path="new" element={<NewBook />} />
         </Route>
    ///way2
        <Route path="/Books/:id" element={<Book />} />
        <Route path="/Books" element={<BookList />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/NewBook" element={<NewBook />} />*/}
        <Route path="/Book1" element={<Book1/>}/>
        <Route path="/Book2" element={<Book2/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
